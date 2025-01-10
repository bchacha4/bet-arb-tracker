import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { AVAILABLE_SPORTSBOOKS } from "@/constants/sportsbooks";
import { GroupedOddsData } from '../types';

export const useOddsData = () => {
  return useQuery({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      console.log('Fetching data from Supabase...');
      let allData = [];
      let page = 0;
      const pageSize = 1000;
      
      while (true) {
        const { data, error, count } = await supabase
          .from('odds_scout')
          .select('*', { count: 'exact' })
          .order('created_at', { ascending: false })
          .range(page * pageSize, (page + 1) * pageSize - 1);
        
        if (error) {
          console.error('Error fetching data:', error);
          throw error;
        }

        if (!data || data.length === 0) break;
        
        allData = [...allData, ...data];
        
        if (page === 0) {
          console.log('Total rows in database:', count);
        }
        
        if (data.length < pageSize) break;
        page++;
      }
      
      console.log('Raw data count:', allData.length);
      
      // Group the data by Player and Prop
      const groupedData = allData.reduce((acc: Record<string, GroupedOddsData>, curr) => {
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
        const sportsbooks = AVAILABLE_SPORTSBOOKS.map(book => book.value);
        
        sportsbooks.forEach(book => {
          const formattedBook = book.replace(/\./g, '\\.').replace(/\s/g, ' ');
          if (!acc[key].sportsbooks[book]) {
            acc[key].sportsbooks[book] = {
              Over: null,
              Under: null
            };
          }
          
          if (curr.Outcome === 'Over' || curr.Outcome === 'Under') {
            acc[key].sportsbooks[book][curr.Outcome] = {
              odds: curr[`${formattedBook}_Odds`],
              line: curr[`${formattedBook}_Line`],
              link: curr[`${formattedBook}_Link`]
            };
          }
        });
        
        return acc;
      }, {});

      const groupedArray = Object.values(groupedData);
      console.log('Grouped data count:', groupedArray.length);
      return groupedArray;
    }
  });
};