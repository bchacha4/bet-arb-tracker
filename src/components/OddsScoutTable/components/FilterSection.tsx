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
import { formatDistanceToNow } from 'date-fns';
import SportsbookFilter from './SportsbookFilter';
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
  const [timeAgo, setTimeAgo] = React.useState('');
  const isMobile = useIsMobile();

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
    <div className="space-y-4">
      <Input
        placeholder="Search by player, team, or prop type..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full"
      />
      
      <div className={`flex ${isMobile ? 'gap-2' : 'gap-4'} ${isMobile ? 'w-full' : ''}`}>
        <Select value={selectedProp} onValueChange={onPropChange}>
          <SelectTrigger className={`bg-white ${isMobile ? 'flex-1' : 'w-[180px]'}`}>
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
        
        <div className={`${isMobile ? 'flex-1' : ''}`}>
          <SportsbookFilter
            selectedSportsbooks={selectedSportsbooks}
            onSportsbooksChange={onSportsbooksChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-4">
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