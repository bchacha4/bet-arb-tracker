import React from 'react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw } from "lucide-react";

interface FilterSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedProp: string;
  onPropChange: (value: string) => void;
  availablePropTypes: string[];
  lastUpdated: string;
}

const FilterSection = ({
  searchQuery,
  onSearchChange,
  selectedProp,
  onPropChange,
  availablePropTypes,
  lastUpdated
}: FilterSectionProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
      <div className="flex-1 w-full sm:w-auto">
        <Input
          placeholder="Search by player, team, or prop type..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full sm:max-w-xs"
        />
      </div>
      <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{lastUpdated}</span>
          <RefreshCw className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;