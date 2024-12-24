import React from 'react';
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";
import { useIsMobile } from "@/hooks/use-mobile";
import { useQueryClient } from '@tanstack/react-query';

interface FilterSectionProps {
  isSubscribed: boolean;
  bettingAmount: string;
  onBettingAmountChange: (value: string) => void;
}

const FilterSection = ({
  bettingAmount,
  onBettingAmountChange,
}: FilterSectionProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const queryClient = useQueryClient();

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['arbitrageProps'] });
    toast({
      title: "Data Refreshed",
      description: "The arbitrage opportunities have been updated.",
    });
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-between'} mb-6 gap-4`}>
      <div className="flex items-center gap-4">
        <BettingAmountInput
          value={bettingAmount}
          onChange={onBettingAmountChange}
        />
      </div>
      <Button
        variant="outline"
        className="gap-2 bg-primary text-white hover:bg-white hover:text-primary border-primary h-10"
        onClick={handleRefresh}
      >
        <RefreshCw size={16} />
        Refresh
      </Button>
    </div>
  );
};

export default FilterSection;