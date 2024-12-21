import React, { useEffect, useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileArbitrageCard from "./MobileArbitrageCard";
import { Button } from "@/components/ui/button";
import { calculateAmounts, formatDollarAmount } from "./utils";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

interface Side {
  type: string;
  value: string;
  odds: string;
  book: string;
  wager: string;
  payout: string;
}

interface Prop {
  player: string;
  team: string;
  bet: string;
  hold: string;
  profit: string;
  sides: Side[];
}

interface ArbitrageTableProps {
  props: Prop[];
  bettingAmount: string;
}

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
    profit: '0', // This will be calculated based on betting amount
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
  const isMobile = useIsMobile();

  useEffect(() => {
    const amount = parseFloat(bettingAmount) || 0;
    const updated = fetchedProps.map(prop => ({
      ...prop,
      ...calculateAmounts(prop, amount)
    }));
    setCalculatedProps(updated);
  }, [bettingAmount, fetchedProps]);

  if (isLoading) {
    return <div>Loading...</div>;
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
        <thead className="text-xs uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 border-b border-gray-200">PLAYER/TEAM</th>
            <th className="px-6 py-3 border-b border-gray-200">BET</th>
            <th className="px-6 py-3 border-b border-gray-200">SPORTSBOOK</th>
            <th className="px-6 py-3 border-b border-gray-200">SIDES</th>
            <th className="px-6 py-3 border-b border-gray-200">LINE/ODDS</th>
            <th className="px-6 py-3 border-b border-gray-200">WAGER</th>
            <th className="px-6 py-3 border-b border-gray-200">PAYOUT</th>
            <th className="px-6 py-3 border-b border-gray-200">PROFIT</th>
            <th className="px-6 py-3 border-b border-gray-200">PERCENT RETURN</th>
            <th className="px-6 py-3 border-b border-gray-200">PLACE BETS</th>
          </tr>
        </thead>
        <tbody>
          {calculatedProps.map((prop, index) => (
            <tr
              key={index}
              className="bg-white border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-6 py-4 font-medium">
                {prop.player}
                <br />
                <span className="text-gray-500">{prop.team}</span>
              </td>
              <td className="px-6 py-4">{prop.bet}</td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2">
                    {side.book}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2">
                    {side.type}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2">
                    {side.value} ({side.odds})
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2">
                    ${formatDollarAmount(side.wager)}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 font-bold">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2 text-betting-profit">
                    ${formatDollarAmount(side.payout)}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 font-bold text-betting-profit">
                ${formatDollarAmount(prop.profit)}
              </td>
              <td className="px-6 py-4 font-bold text-betting-profit">
                {prop.hold}%
              </td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <Button
                    key={sideIndex}
                    variant="outline"
                    className="mb-2 w-full text-primary border-primary hover:bg-primary hover:text-white"
                  >
                    PLACE BET
                  </Button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArbitrageTable;