import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";

interface FilterSectionProps {
  isSubscribed: boolean;
  bettingAmount: string;
  onBettingAmountChange: (value: string) => void;
}

const REFRESH_COOLDOWN = 300000; // 5 minutes in milliseconds

const FilterSection = ({ isSubscribed, bettingAmount, onBettingAmountChange }: FilterSectionProps) => {
  const [lastRefreshTime, setLastRefreshTime] = useState<number>(0);
  const { toast } = useToast();

  const handleRefresh = () => {
    const now = Date.now();
    if (!isSubscribed && now - lastRefreshTime < REFRESH_COOLDOWN) {
      const remainingTime = Math.ceil((REFRESH_COOLDOWN - (now - lastRefreshTime)) / 60000);
      toast({
        title: "Refresh Limited",
        description: `Please upgrade to Pro or wait ${remainingTime} minutes to refresh again.`,
        variant: "destructive",
      });
      return;
    }

    setLastRefreshTime(now);
    // Add your refresh logic here
    toast({
      title: "Data Refreshed",
      description: "The arbitrage opportunities have been updated.",
    });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative">
          <Select disabled={!isSubscribed}>
            <SelectTrigger className="w-[180px] bg-white text-gray-900 border-gray-200">
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
            <SelectTrigger className="w-[180px] bg-white text-gray-900 border-gray-200">
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

        <Button
          variant="outline"
          className="gap-2 hidden sm:inline-flex"
          onClick={handleRefresh}
        >
          <RefreshCw size={16} />
          Refresh
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <BettingAmountInput
          value={bettingAmount}
          onChange={onBettingAmountChange}
        />

        <Button
          variant="outline"
          className="gap-2 sm:hidden"
          onClick={handleRefresh}
        >
          <RefreshCw size={16} />
          Refresh
        </Button>
      </div>

      {!isSubscribed && (
        <Button variant="default" className="bg-primary hover:bg-primary-hover text-white">
          Upgrade to Pro
        </Button>
      )}
    </div>
  );
};

export default FilterSection;