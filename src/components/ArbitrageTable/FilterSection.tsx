import React from 'react';
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";
import { useIsMobile } from "@/hooks/use-mobile";
import { useQueryClient } from '@tanstack/react-query';
import SportsbookFilter from '@/components/OddsScoutTable/components/SportsbookFilter';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useArbitrageData } from "./hooks/useArbitrageData";

interface FilterSectionProps {
  bettingAmount: string;
  onBettingAmountChange: (value: string) => void;
  selectedSportsbook: string;
  onSportsbookChange: (value: string) => void;
  selectedProp?: string;
  onPropChange?: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  bettingAmount,
  onBettingAmountChange,
  selectedSportsbook,
  onSportsbookChange,
  selectedProp = 'all',
  onPropChange = () => {},
}) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const queryClient = useQueryClient();

  // Fetch data to get available prop types
  const { data: calculatedProps } = useArbitrageData(bettingAmount, 'all', 'all');
  
  // Get unique prop types from the data
  const availablePropTypes = React.useMemo(() => {
    const uniqueProps = new Set(calculatedProps.map(prop => prop.bet.toLowerCase()));
    return Array.from(uniqueProps).sort();
  }, [calculatedProps]);

  const handleRefresh = React.useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['arbitrageProps'] });
    toast({
      title: "Data Refreshed",
      description: "The arbitrage opportunities have been updated.",
    });
  }, [queryClient, toast]);

  const handleSportsbookChange = (sportsbooks: string[]) => {
    onSportsbookChange(sportsbooks.length > 0 ? sportsbooks[0] : 'all');
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-between'} gap-4 p-4 bg-white rounded-lg shadow-sm border border-border/50`}>
      <div className="flex items-center gap-4 flex-wrap">
        <BettingAmountInput
          value={bettingAmount}
          onChange={onBettingAmountChange}
        />
        <SportsbookFilter
          selectedSportsbooks={selectedSportsbook === 'all' ? [] : [selectedSportsbook]}
          onSportsbooksChange={handleSportsbookChange}
          singleSelect={true}
        />
        <div className="relative z-10">
          <Select
            value={selectedProp}
            onValueChange={onPropChange}
          >
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select prop type" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg">
              <SelectItem 
                value="all"
                className="cursor-pointer hover:bg-gray-100"
              >
                All Props
              </SelectItem>
              {availablePropTypes.map((propType) => (
                <SelectItem 
                  key={propType} 
                  value={propType}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {propType.split('_')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
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