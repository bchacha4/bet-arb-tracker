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
import { formatDistanceToNow } from 'date-fns';

const OddsScoutTable = () => {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProp, setSelectedProp] = useState('all');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const { data: oddsData, isLoading } = useQuery({
    queryKey: ['oddsScout'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('odds_scout')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Set last updated time
      if (data && data.length > 0) {
        const mostRecent = new Date(data[0].created_at);
        setLastUpdated(formatDistanceToNow(mostRecent, { addSuffix: true }));
      }
      
      // Group the data by Player and Prop
      const groupedData = data.reduce((acc: any, curr: any) => {
        const key = `${curr.Player}-${curr["Player Prop"]}`;
        if (!acc[key]) {
          acc[key] = {
            player: curr.Player,
            team: `${curr["Home Team"]} vs ${curr["Away Team"]}`,
            prop: curr["Player Prop"],
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
          if (!acc[key].sportsbooks[book]) {
            acc[key].sportsbooks[book] = {};
          }
          
          // Store both over and under data
          if (curr.Outcome === 'Over' || curr.Outcome === 'Under') {
            acc[key].sportsbooks[book][curr.Outcome] = {
              odds: curr[`${book}_Odds`],
              line: curr[`${book}_Line`],
              link: curr[`${book}_Link`]
            };
          }
        });
        
        return acc;
      }, {});

      return Object.values(groupedData);
    }
  });

  // Get unique prop types from the data
  const availablePropTypes = useMemo(() => {
    if (!oddsData) return [];
    const propTypes = new Set(oddsData.map((item: any) => item.prop));
    return Array.from(propTypes).filter(Boolean);
  }, [oddsData]);

  const filteredData = useMemo(() => {
    if (!oddsData) return [];

    return oddsData.filter((item: any) => {
      const searchMatch = searchQuery.toLowerCase().trim() === '' || 
        item.player?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.team?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.prop?.toLowerCase().includes(searchQuery.toLowerCase());

      const propMatch = selectedProp === 'all' || 
        item.prop?.toLowerCase() === selectedProp.toLowerCase();

      return searchMatch && propMatch;
    });
  }, [oddsData, searchQuery, selectedProp]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!filteredData || filteredData.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      <FilterSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedProp={selectedProp}
        onPropChange={setSelectedProp}
        availablePropTypes={availablePropTypes}
        lastUpdated={lastUpdated}
      />
      {isMobile ? (
        <div className="space-y-4">
          {filteredData.map((prop: any, index: number) => (
            <MobileOddsCard key={index} prop={prop} />
          ))}
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg overflow-auto max-h-[800px] relative">
          <table className="w-full text-sm text-left text-gray-900">
            <thead className="text-xs uppercase bg-gray-50 sticky top-0 z-10">
              <TableHeader />
            </thead>
            <tbody>
              {filteredData.map((prop: any, index: number) => (
                <TableRow key={index} prop={prop} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OddsScoutTable;