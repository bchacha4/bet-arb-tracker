
import { useState, useMemo, useCallback } from 'react';
import { GroupedOddsData } from '../types';
import { AVAILABLE_SPORTSBOOKS } from '@/constants/sportsbooks';

export const useOddsFilters = (oddsData: GroupedOddsData[] | undefined) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProp, setSelectedProp] = useState('all');
  const [selectedSportsbooks, setSelectedSportsbooks] = useState<string[]>(
    AVAILABLE_SPORTSBOOKS.map(book => book.value)
  );

  // Memoize prop types calculation
  const availablePropTypes = useMemo(() => {
    if (!oddsData) return [];
    const propTypes = new Set<string>();
    
    // Single pass through data
    oddsData.forEach(item => {
      if (item.prop) propTypes.add(item.prop);
    });
    
    return Array.from(propTypes);
  }, [oddsData]);

  // Memoize search function
  const searchFilter = useCallback((item: GroupedOddsData) => {
    if (searchQuery.trim() === '') return true;
    
    const query = searchQuery.toLowerCase();
    return (
      (item.player?.toLowerCase().includes(query)) ||
      (item.team?.toLowerCase().includes(query)) ||
      (item.prop?.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Memoize prop filter function
  const propFilter = useCallback((item: GroupedOddsData) => {
    return selectedProp === 'all' || item.prop?.toLowerCase() === selectedProp.toLowerCase();
  }, [selectedProp]);

  // Memoize filtered data with optimized filtering
  const filteredData = useMemo(() => {
    if (!oddsData) return [];

    return oddsData.filter(item => searchFilter(item) && propFilter(item));
  }, [oddsData, searchFilter, propFilter]);

  return {
    searchQuery,
    setSearchQuery,
    selectedProp,
    setSelectedProp,
    selectedSportsbooks,
    setSelectedSportsbooks,
    availablePropTypes,
    filteredData
  };
};
