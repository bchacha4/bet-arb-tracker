import React, { useEffect, useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileArbitrageCard from "./MobileArbitrageCard";
import { calculateAmounts } from "./utils";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Prop, ArbitrageTableProps } from "./types";

const fetchArbitrageProps = async () => {
  const { data, error } = await supabase
    .from('arb_props')
    .select('*');
  
  if (error) throw error;
  
  return data.map(item => ({
    player: item.Player || '',
    team: `${item.Home_Team || ''} vs. ${item.Away_Team || ''}`,
    bet: (item.Player_Prop || '').replace(/_/g, ' '),
    hold: item.Arbitrage_Margin?.toString() || '0',
    profit: '0',
    sides: [
      {
        type: item.Outcome_1 || '',
        value: item.Line?.toString() || '',
        odds: item.Odds_1?.toString() || '',
        book: item.Bookmaker_1 || '',
        wager: '0',
        payout: '0'
      },
      {
        type: item.Outcome_2 || '',
        value: item.Line?.toString() || '',
        odds: item.Odds_2?.toString() || '',
        book: item.Bookmaker_2 || '',
        wager: '0',
        payout: '0'
      }
    ]
  }));
};

const ArbitrageTable = ({ bettingAmount }: ArbitrageTableProps) => {
  const { data: fetchedProps = [], isLoading } = useQuery({
    queryKey: ['arbitrageProps'],
    queryFn: fetchArbitrageProps,
  });

  const [calculatedProps, setCalculatedProps] = useState<Prop[]>([]);
  const [filteredProps, setFilteredProps] = useState<Prop[]>([]);
  const [selectedSportsbooks, setSelectedSportsbooks] = useState<string[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const amount = parseFloat(bettingAmount) || 0;
    const updated = fetchedProps.map(prop => ({
      ...prop,
      ...calculateAmounts(prop, amount)
    }));
    setCalculatedProps(updated);
  }, [bettingAmount, fetchedProps]);

  useEffect(() => {
    if (selectedSportsbooks.length === 0) {
      setFilteredProps(calculatedProps);
      return;
    }

    const filtered = calculatedProps.filter(prop => 
      prop.sides.some(side => selectedSportsbooks.includes(side.book))
    );
    setFilteredProps(filtered);
  }, [calculatedProps, selectedSportsbooks]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        {filteredProps.map((prop, index) => (
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
          {filteredProps.map((prop, index) => (
            <TableRow key={index} prop={prop} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArbitrageTable;