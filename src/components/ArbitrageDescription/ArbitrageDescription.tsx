import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ArbitrageDescription = () => {
  return (
    <Card className="mb-8 bg-white">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Understanding Arbitrage Betting</h2>
        <div className="space-y-4 text-gray-600 text-sm">
          <p>
            Arbitrage betting, or "arbing," is a strategy where you place bets on all possible outcomes of an event at different sportsbooks, taking advantage of discrepancies in odds to guarantee a profit.
          </p>
          <p>
            Our table below helps you identify these opportunities by:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Showing the best available odds across different sportsbooks</li>
            <li>Calculating optimal bet sizes based on your total betting amount</li>
            <li>Displaying guaranteed profit for each arbitrage opportunity</li>
          </ul>
          <p>
            To use the table: Enter your total betting amount, review the available opportunities, and place the recommended bets at the specified sportsbooks. The table automatically calculates how much to bet on each side to guarantee the displayed profit.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArbitrageDescription;