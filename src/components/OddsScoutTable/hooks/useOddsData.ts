import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { GroupedOddsData } from '../types';

export const useOddsData = () => {
  return useQuery<GroupedOddsData[], Error>({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      console.log('Fetching data from Supabase...');
      let allData = [];
      let page = 0;
      const pageSize = 1000;

      while (true) {
        const { data, error } = await supabase
          .from('odds_scout')
          .select('*')
          .order('created_at', { ascending: false })
          .range(page * pageSize, (page + 1) * pageSize - 1);

        if (error) {
          console.error('Error fetching data:', error);
          throw error;
        }

        if (!data || data.length === 0) break;

        allData = [...allData, ...data];
        page++;
      }

      console.log('Raw data count:', allData.length);

      // Transform the data into GroupedOddsData format
      const groupedData = allData.reduce<Record<string, GroupedOddsData>>((acc, curr) => {
        const key = `${curr.Player}-${curr["Player Prop"]}`;
        
        if (!acc[key]) {
          acc[key] = {
            player: curr.Player,
            team: `${curr["Home Team"]} vs ${curr["Away Team"]}`,
            prop: curr["Player Prop"],
            created_at: curr.created_at,
            sportsbooks: {}
          };
        }
        
        // Handle all sportsbooks, including those with spaces in their names
        const sportsbooks = [
          'FanDuel',
          'ESPN BET',
          'DraftKings',
          'Fliff',
          'BetMGM',
          'Hard Rock Bet',
          'BetRivers',
          'Bally Bet',
          'Caesars',
          'BetOnline.ag',
          'Bovada',
          'BetUS',
          'betPARX',
          'BetAnySports',
          'LowVig.ag'
        ];

        sportsbooks.forEach(book => {
          if (!acc[key].sportsbooks[book]) {
            acc[key].sportsbooks[book] = {
              Over: null,
              Under: null
            };
          }

          // Use exact column names from the database
          const oddsColumn = `${book}_Odds`;
          const lineColumn = `${book}_Line`;
          const linkColumn = `${book}_Link`;

          if (curr.Outcome === 'Over' || curr.Outcome === 'Under') {
            acc[key].sportsbooks[book][curr.Outcome] = {
              odds: curr[oddsColumn],
              line: curr[lineColumn],
              link: curr[linkColumn]
            };
          }
        });
        
        return acc;
      }, {});

      const groupedArray = Object.values(groupedData);
      console.log('Grouped data count:', groupedArray.length);
      return groupedArray;
    },
    staleTime: 30000, // Cache data for 30 seconds
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};