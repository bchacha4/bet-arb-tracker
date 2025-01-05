import React from 'react';
import { RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useQueryClient } from '@tanstack/react-query';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

interface FilterSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedProp: string;
  onPropChange: (value: string) => void;
  availablePropTypes: string[];
}

const FilterSection = ({
  searchQuery,
  onSearchChange,
  selectedProp,
  onPropChange,
  availablePropTypes,
}: FilterSectionProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['oddsScout'] });
    toast({
      title: "Data Refreshed",
      description: "The odds data has been updated.",
    });
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-between'} mb-6 gap-4`}>
      <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-4`}>
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-white border-gray-200"
          />
        </div>
        <Select value={selectedProp} onValueChange={onPropChange}>
          <SelectTrigger className="w-[200px] bg-white border-gray-200">
            <SelectValue placeholder="Filter by prop type" />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200">
            <SelectItem value="all">All Props</SelectItem>
            {availablePropTypes.map((prop) => (
              <SelectItem key={prop} value={prop.toLowerCase()}>
                {prop}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="outline"
        className="gap-2 bg-primary text-white hover:bg-white hover:text-primary border-primary h-10 whitespace-nowrap"
        onClick={handleRefresh}
      >
        <RefreshCw size={16} />
        Refresh
      </Button>
    </div>
  );
};

export default FilterSection;