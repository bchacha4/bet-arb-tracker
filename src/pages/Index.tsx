import React, { useState } from 'react';
import ArbitrageTable from '@/components/ArbitrageTable/ArbitrageTable';
import FilterSection from '@/components/ArbitrageTable/FilterSection';
import Navbar from '@/components/Navbar/Navbar';
import ArbitrageDescription from '@/components/ArbitrageDescription/ArbitrageDescription';
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [bettingAmount, setBettingAmount] = useState("1000");
  const [selectedSportsbook, setSelectedSportsbook] = useState("all");
  const isSubscribed = false;
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1400px] mx-auto p-6">
        <ArbitrageDescription />
        
        {!isMobile && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Arbitrage Tracker</h2>
          </div>
        )}
        
        {isMobile && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Arbitrage Tracker</h2>
          </div>
        )}
        
        <FilterSection 
          isSubscribed={isSubscribed} 
          bettingAmount={bettingAmount}
          onBettingAmountChange={setBettingAmount}
          selectedSportsbook={selectedSportsbook}
          onSportsbookChange={setSelectedSportsbook}
        />
        
        <ArbitrageTable 
          bettingAmount={bettingAmount}
          selectedSportsbook={selectedSportsbook}
        />
      </div>
    </div>
  );
};

export default Index;