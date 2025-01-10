import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AVAILABLE_SPORTSBOOKS } from "@/constants/sportsbooks";

interface SportsbookFilterProps {
  selectedSportsbooks: string[];
  onSportsbooksChange: (sportsbooks: string[]) => void;
}

const SportsbookFilter = ({ selectedSportsbooks, onSportsbooksChange }: SportsbookFilterProps) => {
  const toggleSportsbook = (sportsbook: string) => {
    if (selectedSportsbooks.includes(sportsbook)) {
      onSportsbooksChange(selectedSportsbooks.filter(s => s !== sportsbook));
    } else {
      onSportsbooksChange([...selectedSportsbooks, sportsbook]);
    }
  };

  const selectAll = () => {
    onSportsbooksChange(AVAILABLE_SPORTSBOOKS.map(book => book.value));
  };

  const clearAll = () => {
    onSportsbooksChange([]);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="w-[180px] justify-between bg-white border-border/50 hover:bg-gray-50 transition-colors duration-200"
        >
          Sportsbooks
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <div className="p-2 grid gap-2">
          <div className="flex items-center justify-between px-2 py-1 border-b">
            <span className="text-sm font-medium">Filter Sportsbooks</span>
          </div>
          <div className="px-2 py-1 flex justify-between gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={selectAll}
            >
              Select All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={clearAll}
            >
              Clear All
            </Button>
          </div>
          <div className="max-h-[300px] overflow-auto">
            {AVAILABLE_SPORTSBOOKS.map((book) => (
              <div
                key={book.value}
                className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleSportsbook(book.value)}
              >
                <Checkbox
                  id={book.value}
                  checked={selectedSportsbooks.includes(book.value)}
                  onCheckedChange={() => toggleSportsbook(book.value)}
                />
                <label
                  htmlFor={book.value}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {book.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SportsbookFilter;