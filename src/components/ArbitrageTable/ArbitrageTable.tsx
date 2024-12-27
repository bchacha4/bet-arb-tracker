import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import MobileArbitrageCard from "./MobileArbitrageCard";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import LoadingState from "./components/LoadingState";
import EmptyState from "./components/EmptyState";
import { useArbitrageData } from "./hooks/useArbitrageData";
import { ArbitrageTableProps } from "./types";

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
          <MobileArbitrageCard key={index} prop={prop} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left text-gray-900">
        <TableHeader />
        <tbody>
          {calculatedProps.map((prop, index) => (
            <TableRow key={index} prop={prop} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArbitrageTable;