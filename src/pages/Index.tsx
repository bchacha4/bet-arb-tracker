import React, { useState } from 'react';
import ArbitrageTable from '@/components/ArbitrageTable/ArbitrageTable';
import FilterSection from '@/components/ArbitrageTable/FilterSection';
import BettingAmountInput from '@/components/ArbitrageTable/BettingAmountInput';

const mockProps = [
  {
    player: "Konstantinos Mavropanos",
    team: "Bournemouth",
    bet: "Total Shots",
    hold: "-1.8%",
    profit: "18.19",
    sides: [
      { type: "Over" as const, value: "0.5", odds: "-120", book: "DK" },
      { type: "Under" as const, value: "0.5", odds: "+129", book: "FD" }
    ],
    wager: "555.38",
    payout: "1,018.19",
    updated: "< 1 Min"
  },
  {
    player: "Kudus Mohammed",
    team: "Bournemouth",
    bet: "Total Shots on Goal",
    hold: "-1.4%",
    profit: "13.93",
    sides: [
      { type: "Over" as const, value: "1.5", odds: "+460", book: "DK" },
      { type: "Under" as const, value: "1.5", odds: "-420", book: "FD" }
    ],
    wager: "181.06",
    payout: "1,013.93",
    updated: "< 1 Min"
  }
];

const Index = () => {
  const [bettingAmount, setBettingAmount] = useState("1000");
  const isSubscribed = false; // This would come from your auth context

  return (
    <div className="min-h-screen bg-table-dark p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Arbitrage Props</h1>
          <BettingAmountInput
            value={bettingAmount}
            onChange={setBettingAmount}
          />
        </div>
        
        <FilterSection isSubscribed={isSubscribed} />
        
        <ArbitrageTable
          props={mockProps}
          bettingAmount={bettingAmount}
        />
      </div>
    </div>
  );
};

export default Index;