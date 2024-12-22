import React, { useState, useEffect } from 'react';
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";
import { supabase } from "@/integrations/supabase/client";
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
}

const REFRESH_COOLDOWN = 300000; // 5 minutes in milliseconds

const FilterSection = ({
  isSubscribed,
  bettingAmount,
  onBettingAmountChange,
  onSportsbookFilter,
}: FilterSectionProps) => {
  const [lastRefreshTime, setLastRefreshTime] = useState<number>(0);
  const { toast } = useToast();
  const [selectedSportsbook, setSelectedSportsbook] = useState<string>("");
  const [availableSportsbooks, setAvailableSportsbooks] = useState<string[]>([]);

  useEffect(() => {
    const fetchSportsbooks = async () => {
      const { data, error } = await supabase
        .from('Sportsbooks')
        .select('Sportsbook');
      
      if (!error && data) {
        const sportsbooks = data
          .map(item => item.Sportsbook)
          .filter((sportsbook): sportsbook is string => sportsbook !== null);
        setAvailableSportsbooks(sportsbooks);
      } else {
        console.error('Error fetching sportsbooks:', error);
        toast({
          title: "Error",
          description: "Failed to load sportsbooks. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchSportsbooks();
  }, [toast]);

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

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Select value={selectedSportsbook} onValueChange={handleSportsbookChange}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select Sportsbook" />
          </SelectTrigger>
          <SelectContent>
            {availableSportsbooks.map((book) => (
              <SelectItem key={book} value={book}>
                {book}
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