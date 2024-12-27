import React, { useEffect, useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileArbitrageCard from "./MobileArbitrageCard";
import { calculateAmounts } from "./utils";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Prop, ArbitrageTableProps } from "./types";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const fetchArbitrageProps = async () => {
  const { data, error } = await supabase
    .from('arb_props')
    .select('*');
  
  if (error) throw error;
  
  return data.map(item => ({
    player: item.Player || '',
    team: `${item.Home_Team || ''} vs. ${item.Away_Team || ''}`,
    bet: (item.Prop || '').replace(/_/g, ' '),
    hold: item.Arbitrage_Margin?.toString() || '0',
    profit: '0',
    sides: [
      {
        type: item.Outcome_1 || '',
        value: item.Line?.toString() || '',
        odds: item.Odds_1?.toString() || '',
        book: item.Bookmaker_1 || '',
        wager: '0',
        payout: '0',
        link: item.Link_1 || '#'
      },
      {
        type: item.Outcome_2 || '',
        value: item.Line?.toString() || '',
        odds: item.Odds_2?.toString() || '',
        book: item.Bookmaker_2 || '',
        wager: '0',
        payout: '0',
        link: item.Link_2 || '#'
      }
    ]
  }));
};

const ArbitrageTable = ({ bettingAmount, selectedSportsbook }: ArbitrageTableProps) => {
  const { data: fetchedProps = [], isLoading } = useQuery({
    queryKey: ['arbitrageProps'],
    queryFn: fetchArbitrageProps,
  });

  const [calculatedProps, setCalculatedProps] = useState<Prop[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const amount = parseFloat(bettingAmount) || 0;
    let updated = fetchedProps.map(prop => ({
      ...prop,
      ...calculateAmounts(prop, amount)
    }));
    
    if (selectedSportsbook && selectedSportsbook !== 'all') {
      updated = updated.filter(prop => 
        prop.sides.some(side => side.book === selectedSportsbook)
      );
    }
    
    const sorted = updated.sort((a, b) => parseFloat(b.hold) - parseFloat(a.hold));
    setCalculatedProps(sorted);
  }, [bettingAmount, fetchedProps, selectedSportsbook]); // Added proper dependencies

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (calculatedProps.length === 0) {
    return (
      <Alert className="bg-blue-50 border-blue-200">
        <Info className="h-5 w-5 text-blue-500" />
        <AlertDescription className="text-blue-700">
          There are currently no Arbitrage Bets available. We're continuously searching and will provide results as soon as they become available. Check back soon for new opportunities!
        </AlertDescription>
      </Alert>
    );
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        {calculatedProps.map((prop, index) => (
          <MobileArbitrageCard key={index} prop={prop} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left text-gray-900">
        <TableHeader />
        <tbody>
          {calculatedProps.map((prop, index) => (
            <TableRow key={index} prop={prop} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArbitrageTable;