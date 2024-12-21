import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";
import { MultiSelect } from "@/components/ui/multi-select";

interface FilterSectionProps {
  isSubscribed: boolean;
  bettingAmount: string;
  onBettingAmountChange: (value: string) => void;
  onSportsbookFilter: (values: string[]) => void;
  onSportsFilter: (values: string[]) => void;
  availableSportsbooks: string[];
  availableSports: string[];
}

const REFRESH_COOLDOWN = 300000; // 5 minutes in milliseconds

const FilterSection = ({
  isSubscribed,
  bettingAmount,
  onBettingAmountChange,
  onSportsbookFilter,
  onSportsFilter,
  availableSportsbooks,
  availableSports,
}: FilterSectionProps) => {
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
    toast({
      title: "Data Refreshed",
      description: "The arbitrage opportunities have been updated.",
    });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <MultiSelect
          options={availableSportsbooks.map(book => ({ label: book, value: book }))}
          onChange={onSportsbookFilter}
          placeholder="Select Sportsbooks"
          className="w-[180px] bg-white"
        />

        <MultiSelect
          options={availableSports.map(sport => ({ label: sport, value: sport }))}
          onChange={onSportsFilter}
          placeholder="Select Sports"
          className="w-[180px] bg-white"
        />

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