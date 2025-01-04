import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";
import LoadingState from "./components/LoadingState";
import EmptyState from "./components/EmptyState";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import MobileOddsCard from "./components/MobileOddsCard";

const OddsScoutTable = () => {
  const isMobile = useIsMobile();

  const { data: oddsData, isLoading } = useQuery({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('odds_scout')
        .select('*');
      
      if (error) throw error;
      
      // Group the data by Player and Prop
      const groupedData = data.reduce((acc: any, curr: any) => {
        const key = `${curr.Player}-${curr["Player Prop"]}`;
        if (!acc[key]) {
          acc[key] = {
            player: curr.Player,
            team: `${curr["Home Team"]} vs ${curr["Away Team"]}`,
            prop: curr["Player Prop"],
            outcome: curr.Outcome,
            sportsbooks: {}
          };
        }
        
        // Add sportsbook data
        const sportsbooks = [
          'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM', 
          'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars', 
          'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX', 
          'BetAnySports', 'LowVig.ag'
        ];
        
        sportsbooks.forEach(book => {
          const odds = curr[`${book}_Odds`];
          const line = curr[`${book}_Line`];
          const link = curr[`${book}_Link`];
          
          if (odds && line) {
            if (!acc[key].sportsbooks[book]) {
              acc[key].sportsbooks[book] = {};
            }
            acc[key].sportsbooks[book][curr.Outcome] = {
              odds,
              line,
              link
            };
          }
        });
        
        return acc;
      }, {});

      return Object.values(groupedData);
    }
  });

  if (isLoading) {
    return <LoadingState />;
  }

  if (!oddsData || oddsData.length === 0) {
    return <EmptyState />;
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        {oddsData.map((prop: any, index: number) => (
          <MobileOddsCard key={index} prop={prop} />
        ))}
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-auto max-h-[800px]">
      <table className="w-full text-sm text-left text-gray-900">
        <TableHeader />
        <tbody>
          {oddsData.map((prop: any, index: number) => (
            <TableRow key={index} prop={prop} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OddsScoutTable;