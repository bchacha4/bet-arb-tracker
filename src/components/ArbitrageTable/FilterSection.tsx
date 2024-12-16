import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterSectionProps {
  isSubscribed: boolean;
}

const FilterSection = ({ isSubscribed }: FilterSectionProps) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <div className="relative">
        <Select disabled={!isSubscribed}>
          <SelectTrigger className="w-[180px] bg-table-dark text-white border-table-border">
            <SelectValue placeholder="All Sportsbooks" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sportsbooks</SelectItem>
            <SelectItem value="draftkings">DraftKings</SelectItem>
            <SelectItem value="fanduel">FanDuel</SelectItem>
            <SelectItem value="caesars">Caesars</SelectItem>
          </SelectContent>
        </Select>
        {!isSubscribed && (
          <Lock className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        )}
      </div>

      <div className="relative">
        <Select disabled={!isSubscribed}>
          <SelectTrigger className="w-[180px] bg-table-dark text-white border-table-border">
            <SelectValue placeholder="All Sports" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sports</SelectItem>
            <SelectItem value="nba">NBA</SelectItem>
            <SelectItem value="nfl">NFL</SelectItem>
            <SelectItem value="mlb">MLB</SelectItem>
          </SelectContent>
        </Select>
        {!isSubscribed && (
          <Lock className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        )}
      </div>

      {!isSubscribed && (
        <Button variant="outline" className="text-primary hover:text-primary-hover">
          Upgrade to Pro
        </Button>
      )}
    </div>
  );
};

export default FilterSection;