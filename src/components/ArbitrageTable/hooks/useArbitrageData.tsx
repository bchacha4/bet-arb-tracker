import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { calculateAmounts } from "../utils";
import { Prop } from "../types";

const fetchArbitrageProps = async () => {
  // Fetch data from both tables
  const [arbResponse, nbaResponse] = await Promise.all([
    supabase.from('arb_props').select('*'),
    supabase.from('nba_props').select('*')
  ]);
  
  if (arbResponse.error) throw arbResponse.error;
  if (nbaResponse.error) throw nbaResponse.error;
  
  // Combine and transform the data
  const combinedData = [...arbResponse.data, ...nbaResponse.data].map(item => ({
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

  return combinedData;
};

export const useArbitrageData = (bettingAmount: string, selectedSportsbook: string) => {
  const { data: fetchedProps = [], isLoading } = useQuery({
    queryKey: ['arbitrageProps'],
    queryFn: fetchArbitrageProps,
  });

  const processedData = React.useMemo(() => {
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
    
    return updated.sort((a, b) => parseFloat(b.hold) - parseFloat(a.hold));
  }, [bettingAmount, fetchedProps, selectedSportsbook]);

  return { data: processedData, isLoading };
};