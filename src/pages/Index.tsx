
import React, { useState } from 'react';
import ArbitrageTable from '@/components/ArbitrageTable/ArbitrageTable';
import FilterSection from '@/components/ArbitrageTable/FilterSection';
import Navbar from '@/components/Navbar/Navbar';
import ArbitrageDescription from '@/components/ArbitrageDescription/ArbitrageDescription';
import Announcement from '@/components/Announcement/Announcement';
import Footer from '@/components/Footer/Footer';
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [bettingAmount, setBettingAmount] = useState("1000");
  const [selectedSportsbook, setSelectedSportsbook] = useState("all");
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-gray-50">
      <Navbar />
      <div className="flex-grow max-w-[1400px] mx-auto p-4 md:p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Arbitrage Finder
        </h1>
        <Announcement />
        <ArbitrageDescription />
        
        <FilterSection 
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
      <Footer />
    </div>
  );
};

export default Index;
