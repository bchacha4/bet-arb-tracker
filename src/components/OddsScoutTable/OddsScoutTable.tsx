
import React, { useCallback, memo } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import LoadingState from "./components/LoadingState";
import EmptyState from "./components/EmptyState";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import MobileOddsCard from "./components/MobileOddsCard";
import FilterSection from "./components/FilterSection";
import { useOddsData } from "./hooks/useOddsData";
import { useOddsFilters } from "./hooks/useOddsFilters";
import { GroupedOddsData } from './types';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from "@/components/ui/use-toast";

// Memoize TableRow component
const MemoizedTableRow = memo(TableRow);
const MemoizedMobileOddsCard = memo(MobileOddsCard);

const OddsScoutTable = () => {
  const isMobile = useIsMobile();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { data: oddsData, isLoading } = useOddsData();
  const {
    searchQuery,
    setSearchQuery,
    selectedProp,
    setSelectedProp,
    selectedSportsbooks,
    setSelectedSportsbooks,
    availablePropTypes,
    filteredData
  } = useOddsFilters(oddsData);

  const handleRefresh = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey: ['oddsScout'] });
    toast({
      title: "Data Refreshed",
      description: "The odds data has been updated to the latest version.",
    });
  }, [queryClient, toast]);

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
        lastUpdated={oddsData?.[0]?.created_at || ''}
        onRefresh={handleRefresh}
        selectedSportsbooks={selectedSportsbooks}
        onSportsbooksChange={setSelectedSportsbooks}
      />
      {isMobile ? (
        <div className="space-y-4">
          {filteredData.map((prop: GroupedOddsData, index) => (
            <MemoizedMobileOddsCard 
              key={`${prop.player}-${prop.prop}-${index}`}
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
                {filteredData.map((prop: GroupedOddsData, index) => (
                  <MemoizedTableRow 
                    key={`${prop.player}-${prop.prop}-${index}`}
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
