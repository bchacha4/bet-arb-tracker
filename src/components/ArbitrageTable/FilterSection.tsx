import React from 'react';
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BettingAmountInput from "./BettingAmountInput";
import { useIsMobile } from "@/hooks/use-mobile";
import { useQueryClient } from '@tanstack/react-query';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AVAILABLE_SPORTSBOOKS } from "@/constants/sportsbooks";

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

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-between'} gap-4 p-4 bg-white rounded-lg shadow-sm border border-border/50`}>
      <div className="flex items-center gap-4">
        <BettingAmountInput
          value={bettingAmount}
          onChange={onBettingAmountChange}
        />
        {!isMobile && (
          <Select value={selectedSportsbook} onValueChange={onSportsbookChange}>
            <SelectTrigger className="w-[180px] bg-white border-border/50">
              <SelectValue placeholder="Filter by sportsbook" />
            </SelectTrigger>
            <SelectContent className="bg-white border-border/50">
              <SelectItem value="all">All Sportsbooks</SelectItem>
              {AVAILABLE_SPORTSBOOKS.map((book) => (
                <SelectItem key={book.value} value={book.value}>
                  {book.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="flex items-center gap-4">
        {isMobile && (
          <Select value={selectedSportsbook} onValueChange={onSportsbookChange}>
            <SelectTrigger className="w-[180px] bg-white border-border/50">
              <SelectValue placeholder="Filter by sportsbook" />
            </SelectTrigger>
            <SelectContent className="bg-white border-border/50">
              <SelectItem value="all">All Sportsbooks</SelectItem>
              {AVAILABLE_SPORTSBOOKS.map((book) => (
                <SelectItem key={book.value} value={book.value}>
                  {book.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
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