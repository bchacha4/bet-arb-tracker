import { useState, useMemo } from 'react';
import { GroupedOddsData } from '../types';

export const useOddsFilters = (oddsData: GroupedOddsData[] | undefined) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProp, setSelectedProp] = useState('all');
  const [selectedSportsbooks, setSelectedSportsbooks] = useState<string[]>([]);

  const availablePropTypes = useMemo(() => {
    if (!oddsData) return [];
    const propTypes = new Set(oddsData.map(item => item.prop));
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