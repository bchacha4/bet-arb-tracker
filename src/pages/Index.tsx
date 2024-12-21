import React, { useState, useMemo } from 'react';
import ArbitrageTable from '@/components/ArbitrageTable/ArbitrageTable';
import FilterSection from '@/components/ArbitrageTable/FilterSection';
import Navbar from '@/components/Navbar/Navbar';
import ArbitrageDescription from '@/components/ArbitrageDescription/ArbitrageDescription';
import { useIsMobile } from "@/hooks/use-mobile";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [bettingAmount, setBettingAmount] = useState("1000");
  const [selectedSportsbooks, setSelectedSportsbooks] = useState<string[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const isSubscribed = false;
  const isMobile = useIsMobile();

  const { data: sportsbooks = [] } = useQuery({
    queryKey: ['sportsbooks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('arb_props')
        .select('Bookmaker_1, Bookmaker_2');
      
      if (error) throw error;
      
      const uniqueBooks = new Set<string>();
      data.forEach(item => {
        if (item.Bookmaker_1) uniqueBooks.add(item.Bookmaker_1);
        if (item.Bookmaker_2) uniqueBooks.add(item.Bookmaker_2);
      });
      
      return Array.from(uniqueBooks);
    },
  });

  const availableSports = ['NBA', 'NFL', 'MLB']; // This could be fetched from the database if needed

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1400px] mx-auto p-6">
        <ArbitrageDescription />
        
        {!isMobile && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Arbitrage Props</h2>
          </div>
        )}
        
        {isMobile && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Arbitrage Props</h2>
          </div>
        )}
        
        <FilterSection 
          isSubscribed={isSubscribed} 
          bettingAmount={bettingAmount}
          onBettingAmountChange={setBettingAmount}
          onSportsbookFilter={setSelectedSportsbooks}
          onSportsFilter={setSelectedSports}
          availableSportsbooks={sportsbooks}
          availableSports={availableSports}
        />
        
        <ArbitrageTable 
          bettingAmount={bettingAmount}
          selectedSportsbooks={selectedSportsbooks}
          selectedSports={selectedSports}
        />
      </div>
    </div>
  );
};

export default Index;