
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { formatDollarAmount } from '@/components/ArbitrageTable/utils';

interface CalculationResults {
  totalWager: number;
  totalPayout: number;
  profitAmount: number;
  profitPercentage: number;
  wager1: number;
  wager2: number;
}

const ArbitrageCalculatorForm = () => {
  const [odds1, setOdds1] = useState('');
  const [odds2, setOdds2] = useState('');
  const [totalWager, setTotalWager] = useState('1000');
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateArbitrage = () => {
    // Convert American odds to decimal
    const decimal1 = odds1.startsWith('-') 
      ? 1 + (100 / Math.abs(parseInt(odds1)))
      : 1 + (parseInt(odds1) / 100);
    const decimal2 = odds2.startsWith('-')
      ? 1 + (100 / Math.abs(parseInt(odds2)))
      : 1 + (parseInt(odds2) / 100);

    // Calculate implied probabilities
    const impliedProb1 = 1 / decimal1;
    const impliedProb2 = 1 / decimal2;
    const totalImpliedProb = impliedProb1 + impliedProb2;

    // Check if arbitrage exists
    if (totalImpliedProb >= 1) {
      setResults(null);
      return;
    }

    const totalWagerAmount = parseFloat(totalWager);
    
    // Calculate individual wagers
    const wager1 = +(totalWagerAmount * (impliedProb1 / totalImpliedProb)).toFixed(2);
    const wager2 = +(totalWagerAmount - wager1).toFixed(2);
    
    // Calculate payouts and profits
    const payout1 = wager1 * decimal1;
    const payout2 = wager2 * decimal2;
    
    const profitAmount = payout1 - totalWagerAmount;
    const profitPercentage = (profitAmount / totalWagerAmount) * 100;

    setResults({
      totalWager: totalWagerAmount,
      totalPayout: payout1,
      profitAmount,
      profitPercentage,
      wager1,
      wager2
    });
  };

  return (
    <Card className="bg-white shadow-sm border-border/50">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="odds1">Odds (Side 1)</Label>
              <Input
                id="odds1"
                type="text"
                placeholder="-110"
                value={odds1}
                onChange={(e) => setOdds1(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="odds2">Odds (Side 2)</Label>
              <Input
                id="odds2"
                type="text"
                placeholder="+100"
                value={odds2}
                onChange={(e) => setOdds2(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="total-wager">Total Wager Amount ($)</Label>
            <Input
              id="total-wager"
              type="number"
              value={totalWager}
              onChange={(e) => setTotalWager(e.target.value)}
            />
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={calculateArbitrage}
          >
            Calculate
          </Button>
        </div>

        {results && (
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Results</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Wager (Side 1)</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${formatDollarAmount(results.wager1.toString())}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Wager (Side 2)</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${formatDollarAmount(results.wager2.toString())}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Wager</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${formatDollarAmount(results.totalWager.toString())}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Payout</p>
                <p className="text-lg font-semibold text-betting-profit">
                  ${formatDollarAmount(results.totalPayout.toString())}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Profit Amount</p>
                <p className="text-lg font-semibold text-betting-profit">
                  ${formatDollarAmount(results.profitAmount.toString())}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Profit Percentage</p>
                <p className="text-lg font-semibold text-betting-profit">
                  {results.profitPercentage.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ArbitrageCalculatorForm;
