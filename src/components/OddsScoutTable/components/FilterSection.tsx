import React from 'react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SportsbookFilter from './SportsbookFilter';
import LastUpdatedSection from './LastUpdatedSection';
import { useIsMobile } from "@/hooks/use-mobile";

interface FilterSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedProp: string;
  onPropChange: (value: string) => void;
  availablePropTypes: string[];
  lastUpdated: string;
  onRefresh: () => void;
  selectedSportsbooks: string[];
  onSportsbooksChange: (sportsbooks: string[]) => void;
}

const formatPropType = (prop: string): string => {
  return prop
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const FilterSection = ({
  searchQuery,
  onSearchChange,
  selectedProp,
  onPropChange,
  availablePropTypes,
  lastUpdated,
  onRefresh,
  selectedSportsbooks,
  onSportsbooksChange
}: FilterSectionProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4">
      {isMobile ? (
        <>
          <Input
            placeholder="Search by player, team, or prop type..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full"
          />
          <div className="flex gap-2">
            <Select value={selectedProp} onValueChange={onPropChange}>
              <SelectTrigger className="flex-1 bg-white">
                <SelectValue placeholder="Filter by prop type" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-md">
                <SelectItem value="all">All Props</SelectItem>
                {availablePropTypes.map((prop) => (
                  <SelectItem key={prop} value={prop.toLowerCase()}>
                    {formatPropType(prop)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex-1">
              <SportsbookFilter
                selectedSportsbooks={selectedSportsbooks}
                onSportsbooksChange={onSportsbooksChange}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-4">
            <Input
              placeholder="Search by player, team, or prop type..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full"
            />
            <Select value={selectedProp} onValueChange={onPropChange}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Filter by prop type" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-md">
                <SelectItem value="all">All Props</SelectItem>
                {availablePropTypes.map((prop) => (
                  <SelectItem key={prop} value={prop.toLowerCase()}>
                    {formatPropType(prop)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <SportsbookFilter
              selectedSportsbooks={selectedSportsbooks}
              onSportsbooksChange={onSportsbooksChange}
            />
          </div>
        </>
      )}
      <LastUpdatedSection lastUpdated={lastUpdated} onRefresh={onRefresh} />
    </div>
  );
};

export default FilterSection;