import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SportsbookFilter from './SportsbookFilter';
import { formatDistanceToNow } from 'date-fns';

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
  const [timeAgo, setTimeAgo] = React.useState('');

  React.useEffect(() => {
    const updateTimeAgo = () => {
      if (lastUpdated) {
        const date = new Date(lastUpdated);
        setTimeAgo(formatDistanceToNow(date, { addSuffix: true }));
      }
    };

    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 60000);
    return () => clearInterval(interval);
  }, [lastUpdated]);

  return (
    <div className="flex flex-col gap-4">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Input
          placeholder="Search by player, team, or prop type..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
        <div className="flex flex-row gap-4 w-full sm:w-auto">
          <Select value={selectedProp} onValueChange={onPropChange}>
            <SelectTrigger className="w-full sm:w-[180px] bg-white">
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
      </div>

      {/* Last Updated Section */}
      <div className="flex items-center justify-between gap-4 border-t pt-4 mt-2">
        <span className="text-sm text-gray-500">Last updated: {timeAgo}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={onRefresh}
          className="h-9 w-9"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;