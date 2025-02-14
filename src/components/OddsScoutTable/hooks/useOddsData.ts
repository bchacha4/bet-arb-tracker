
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { GroupedOddsData } from '../types';
import { AVAILABLE_SPORTSBOOKS } from "@/constants/sportsbooks";

export const useOddsData = () => {
  return useQuery<GroupedOddsData[], Error>({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      console.log('Fetching data from Supabase...');
      // Fetch only the most recent data with a limit
      const { data, error } = await supabase
        .from('odds_scout')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1000); // Limit to most recent 1000 records for better performance

      if (error) {
        console.error('Error fetching data:', error);
        throw error;
      }

      if (!data) return [];

      console.log('Raw data count:', data.length);

      // Use a Map for faster lookups
      const groupedData = new Map<string, GroupedOddsData>();

      // Single pass through the data
      data.forEach(curr => {
        const key = `${curr.Player}-${curr["Player Prop"]}`;
        
        if (!groupedData.has(key)) {
          groupedData.set(key, {
            player: curr.Player,
            team: `${curr["Home Team"]} vs ${curr["Away Team"]}`,
            prop: curr["Player Prop"],
            created_at: curr.created_at,
            sportsbooks: {}
          });
        }

        const entry = groupedData.get(key)!;
        
        // Batch sportsbook processing
        AVAILABLE_SPORTSBOOKS.forEach(({ value: book }) => {
          if (!entry.sportsbooks[book]) {
            entry.sportsbooks[book] = {
              Over: null,
              Under: null
            };
          }

          if (curr.Outcome === 'Over' || curr.Outcome === 'Under') {
            entry.sportsbooks[book][curr.Outcome] = {
              odds: book === 'BetUS' ? curr[`${book}_odds`] : curr[`${book}_Odds`],
              line: curr[`${book}_Line`],
              link: curr[`${book}_Link`]
            };
          }
        });
      });

      const groupedArray = Array.from(groupedData.values());
      console.log('Grouped data count:', groupedArray.length);
      
      return groupedArray;
    },
    staleTime: 60000, // Cache data for 1 minute
    refetchInterval: 60000, // Refetch every 1 minute
    gcTime: 3600000, // Keep garbage collection time for 1 hour (replaces cacheTime)
  });
};
