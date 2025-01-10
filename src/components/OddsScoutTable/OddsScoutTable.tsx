import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";
import LoadingState from "./components/LoadingState";
import EmptyState from "./components/EmptyState";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import MobileOddsCard from "./components/MobileOddsCard";
import FilterSection from "./components/FilterSection";
import { AVAILABLE_SPORTSBOOKS } from "@/constants/sportsbooks";
import type { Database } from '@/integrations/supabase/types';
import { GroupedOddsData } from './types';

type OddsScoutRow = Database['public']['Tables']['odds_scout']['Row'];

const OddsScoutTable = () => {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProp, setSelectedProp] = useState('all');
  const [selectedSportsbooks, setSelectedSportsbooks] = useState(
    AVAILABLE_SPORTSBOOKS.map(book => book.value)
  );

  const { data: oddsData, isLoading, refetch } = useQuery({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      console.log('Fetching data from Supabase...');
      let allData: OddsScoutRow[] = [];
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
        console.log('Processing row:', {
          player: curr.Player,
          prop: curr["Player Prop"],
          outcome: curr.Outcome
        });
        
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

  // Get unique prop types from the data
  const availablePropTypes = useMemo(() => {
    if (!oddsData) return [];
    const propTypes = new Set(oddsData.map((item: GroupedOddsData) => item.prop));
    return Array.from(propTypes).filter(Boolean);
  }, [oddsData]);

  const filteredData = useMemo(() => {
    if (!oddsData) return [];

    return oddsData.filter((item: GroupedOddsData) => {
      const searchMatch = searchQuery.toLowerCase().trim() === '' || 
        item.player?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.team?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.prop?.toLowerCase().includes(searchQuery.toLowerCase());

      const propMatch = selectedProp === 'all' || 
        item.prop?.toLowerCase() === selectedProp.toLowerCase();

      return searchMatch && propMatch;
    });
  }, [oddsData, searchQuery, selectedProp]);

  const lastUpdated = useMemo(() => {
    if (!oddsData || oddsData.length === 0) return '';
    return oddsData[0].created_at;
  }, [oddsData]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!filteredData || filteredData.length === 0) {
    return <EmptyState />;
  }

  console.log('Final filtered data count:', filteredData.length);

  return (
    <div className="space-y-4">
      <FilterSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedProp={selectedProp}
        onPropChange={setSelectedProp}
        availablePropTypes={availablePropTypes}
        lastUpdated={lastUpdated}
        onRefresh={() => refetch()}
        selectedSportsbooks={selectedSportsbooks}
        onSportsbooksChange={setSelectedSportsbooks}
      />
      {isMobile ? (
        <div className="space-y-4">
          {filteredData.map((prop, index) => (
            <MobileOddsCard 
              key={index} 
              prop={prop}
              visibleSportsbooks={selectedSportsbooks}
            />
          ))}
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="max-h-[800px] overflow-auto relative">
            <table className="w-full text-sm text-left text-gray-900">
              <TableHeader visibleSportsbooks={selectedSportsbooks} />
              <tbody>
                {filteredData.map((prop, index) => (
                  <TableRow 
                    key={index} 
                    prop={prop}
                    visibleSportsbooks={selectedSportsbooks}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OddsScoutTable;