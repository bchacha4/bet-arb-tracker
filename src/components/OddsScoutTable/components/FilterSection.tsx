import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

interface FilterSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedProp: string;
  onPropChange: (value: string) => void;
  availablePropTypes: string[];
  lastUpdated: string;
  onRefresh: () => void;
}

const FilterSection = ({
  searchQuery,
  onSearchChange,
  selectedProp,
  onPropChange,
  availablePropTypes,
  lastUpdated,
  onRefresh
}: FilterSectionProps) => {
  const [timeAgo, setTimeAgo] = useState(lastUpdated);

  useEffect(() => {
    setTimeAgo(lastUpdated);
    const interval = setInterval(() => {
      if (lastUpdated) {
        const date = new Date(lastUpdated);
        setTimeAgo(formatDistanceToNow(date, { addSuffix: true }));
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [lastUpdated]);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
      <div className="flex flex-1 gap-4 w-full sm:w-auto">
        <Input
          placeholder="Search by player, team, or prop type..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full sm:max-w-xs"
        />
        <Select value={selectedProp} onValueChange={onPropChange}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Filter by prop type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Props</SelectItem>
            {availablePropTypes.map((prop) => (
              <SelectItem key={prop} value={prop.toLowerCase()}>
                {prop}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4">
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