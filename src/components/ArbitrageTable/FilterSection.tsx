import React, { useState } from 'react';
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSectionProps {
  isSubscribed: boolean;
  bettingAmount: string;
  onBettingAmountChange: (value: string) => void;
  onSportsbookFilter: (values: string[]) => void;
  onSportsFilter: (values: string[]) => void;
  availableSportsbooks?: { label: string; value: string; }[];
  availableSports?: { label: string; value: string; }[];
}

const REFRESH_COOLDOWN = 300000; // 5 minutes in milliseconds

const FilterSection = ({
  isSubscribed,
  bettingAmount,
  onBettingAmountChange,
  onSportsbookFilter,
  onSportsFilter,
  availableSportsbooks = [],
  availableSports = [],
}: FilterSectionProps) => {
  const [lastRefreshTime, setLastRefreshTime] = useState<number>(0);
  const { toast } = useToast();
  const [selectedSportsbook, setSelectedSportsbook] = useState<string>("");
  const [selectedSport, setSelectedSport] = useState<string>("");

  const handleRefresh = () => {
    const now = Date.now();
    if (!isSubscribed && now - lastRefreshTime < REFRESH_COOLDOWN) {
      const remainingTime = Math.ceil((REFRESH_COOLDOWN - (now - lastRefreshTime)) / 60000);
      toast({
        title: "Refresh Limited",
        description: `Please wait ${remainingTime} minutes to refresh again.`,
        variant: "destructive",
      });
      return;
    }

    setLastRefreshTime(now);
    toast({
      title: "Data Refreshed",
      description: "The arbitrage opportunities have been updated.",
    });
  };

  const handleSportsbookChange = (value: string) => {
    setSelectedSportsbook(value);
    onSportsbookFilter(value ? [value] : []);
  };

  const handleSportChange = (value: string) => {
    setSelectedSport(value);
    onSportsFilter(value ? [value] : []);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Select value={selectedSportsbook} onValueChange={handleSportsbookChange}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select Sportsbook" />
          </SelectTrigger>
          <SelectContent>
            {availableSportsbooks.map((book) => (
              <SelectItem key={book.value} value={book.value}>
                {book.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedSport} onValueChange={handleSportChange}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select Sport" />
          </SelectTrigger>
          <SelectContent>
            {availableSports.map((sport) => (
              <SelectItem key={sport.value} value={sport.value}>
                {sport.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

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
    </div>
  );
};

export default FilterSection;