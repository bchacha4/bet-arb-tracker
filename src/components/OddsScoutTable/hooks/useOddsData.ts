import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { GroupedOddsData } from '../types';

export const useOddsData = () => {
  return useQuery<GroupedOddsData[], Error>({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      console.log('Fetching data from Supabase...');
      let allData: GroupedOddsData[] = [];
      let page = 0;
      const pageSize = 1000;

      while (true) {
        const { data, error } = await supabase
          .from('odds_scout')
          .select('*')
          .range(page * pageSize, (page + 1) * pageSize - 1);

        if (error) {
          console.error('Error fetching data:', error);
          throw error;
        }

        if (!data || data.length === 0) break;

        allData = [...allData, ...data];
        page++;
      }

      console.log('Total records fetched:', allData.length);
      return allData;
    },
  });
};