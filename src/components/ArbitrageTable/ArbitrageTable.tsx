import React, { memo } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileArbitrageCard from "./MobileArbitrageCard";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import LoadingState from "./components/LoadingState";
import EmptyState from "./components/EmptyState";
import { useArbitrageData } from "./hooks/useArbitrageData";
import { ArbitrageTableProps } from "./types";

// Memoize the table row component to prevent unnecessary re-renders
const MemoizedTableRow = memo(TableRow);
const MemoizedMobileCard = memo(MobileArbitrageCard);

const ArbitrageTable = ({ bettingAmount, selectedSportsbook }: ArbitrageTableProps) => {
  const { data: calculatedProps, isLoading } = useArbitrageData(bettingAmount, selectedSportsbook);
  const isMobile = useIsMobile();

  if (isLoading) {
    return <LoadingState />;
  }

  if (calculatedProps.length === 0) {
    return <EmptyState />;
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        {calculatedProps.map((prop, index) => (
          <MemoizedMobileCard key={`${prop.player}-${index}`} prop={prop} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-table-border rounded-lg bg-table-dark">
      <table className="w-full text-sm text-left text-foreground">
        <TableHeader />
        <tbody>
          {calculatedProps.map((prop, index) => (
            <MemoizedTableRow key={`${prop.player}-${index}`} prop={prop} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(ArbitrageTable);