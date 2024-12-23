import React, { useState } from 'react';
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";

interface FilterSectionProps {
  isSubscribed: boolean;
  bettingAmount: string;
  onBettingAmountChange: (value: string) => void;
}

const REFRESH_COOLDOWN = 300000; // 5 minutes in milliseconds

const FilterSection = ({
  isSubscribed,
  bettingAmount,
  onBettingAmountChange,
}: FilterSectionProps) => {
  const [lastRefreshTime, setLastRefreshTime] = useState<number>(0);
  const { toast } = useToast();

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

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
        <div>
          <label htmlFor="wager-amount" className="text-sm font-medium text-gray-700">
            Wager Amount
          </label>
          <BettingAmountInput
            value={bettingAmount}
            onChange={onBettingAmountChange}
          />
        </div>
        <Button
          variant="outline"
          className="gap-2 bg-primary text-white hover:bg-white hover:text-primary border-primary"
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