import React from 'react';
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";
import { useIsMobile } from "@/hooks/use-mobile";
import { useQueryClient } from '@tanstack/react-query';
import SportsbookFilter from '@/components/OddsScoutTable/components/SportsbookFilter';

interface FilterSectionProps {
  bettingAmount: string;
  onBettingAmountChange: (value: string) => void;
  selectedSportsbook: string;
  onSportsbookChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  bettingAmount,
  onBettingAmountChange,
  selectedSportsbook,
  onSportsbookChange,
}) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const queryClient = useQueryClient();

  const handleRefresh = React.useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['arbitrageProps'] });
    toast({
      title: "Data Refreshed",
      description: "The arbitrage opportunities have been updated.",
    });
  }, [queryClient, toast]);

  const handleSportsbookChange = (sportsbooks: string[]) => {
    // Since we only support single sportsbook selection for arbitrage,
    // we'll take the first selected sportsbook or 'all' if none selected
    onSportsbookChange(sportsbooks.length > 0 ? sportsbooks[0] : 'all');
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-between'} gap-4 p-4 bg-white rounded-lg shadow-sm border border-border/50`}>
      <div className="flex items-center gap-4">
        <BettingAmountInput
          value={bettingAmount}
          onChange={onBettingAmountChange}
        />
        <SportsbookFilter
          selectedSportsbooks={selectedSportsbook === 'all' ? [] : [selectedSportsbook]}
          onSportsbooksChange={handleSportsbookChange}
          singleSelect={true}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="gap-2 bg-primary text-white hover:bg-white hover:text-primary border-primary transition-colors duration-200 h-10"
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