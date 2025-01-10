import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AVAILABLE_SPORTSBOOKS } from "@/constants/sportsbooks";
import { GroupedOddsData } from '../types';

interface RawOddsData {
  Player: string | null;
  "Player Prop": string | null;
  "Home Team": string;
  "Away Team": string;
  Outcome: string;
  created_at: string;
  [key: string]: any; // For dynamic sportsbook fields
}

export const useOddsData = () => {
  return useQuery<GroupedOddsData[], Error>({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      console.log('Fetching data from Supabase...');
      let allData: RawOddsData[] = [];
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

        allData = [...allData, ...data] as RawOddsData[];
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
        
        // Add sportsbook data
        AVAILABLE_SPORTSBOOKS.forEach(({ value: book }) => {
          if (!acc[key].sportsbooks[book]) {
            acc[key].sportsbooks[book] = {
              Over: null,
              Under: null
            };
          }
          
          // Handle special characters in column names
          const bookKey = book.replace(/\./g, '\\.').replace(/\s/g, ' ');
          
          if (curr.Outcome === 'Over' || curr.Outcome === 'Under') {
            acc[key].sportsbooks[book][curr.Outcome] = {
              odds: curr[`${bookKey}_Odds`] || curr[`${bookKey}_odds`],
              line: curr[`${bookKey}_Line`],
              link: curr[`${bookKey}_Link`]
            };
          }
        });
        
        return acc;
      }, {});

      const groupedArray = Object.values(groupedData);
      console.log('Grouped data count:', groupedArray.length);
      return groupedArray;
    },
  });
};