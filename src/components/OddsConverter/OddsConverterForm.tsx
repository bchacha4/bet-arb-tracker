
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { formatDollarAmount } from '@/components/ArbitrageTable/utils';

interface OddsState {
  american: string;
  decimal: string;
  fractional: string;
  implied: string;
  betAmount: string;
  toWin: string;
  payout: string;
}

const OddsConverterForm = () => {
  const [oddsState, setOddsState] = useState<OddsState>({
    american: '',
    decimal: '',
    fractional: '',
    implied: '',
    betAmount: '100',
    toWin: '-',
    payout: '-'
  });

  const convertOdds = (value: string, type: 'american' | 'decimal' | 'fractional' | 'implied') => {
    let decimal = 0;

    // Convert input to decimal odds first
    switch (type) {
      case 'american':
        if (value === '') return null;
        const american = parseFloat(value);
        decimal = american > 0 ? (american / 100) + 1 : (100 / Math.abs(american)) + 1;
        break;
      case 'decimal':
        decimal = parseFloat(value);
        break;
      case 'fractional':
        if (!value.includes('/')) return null;
        const [num, den] = value.split('/').map(Number);
        decimal = (num / den) + 1;
        break;
      case 'implied':
        const probability = parseFloat(value) / 100;
        decimal = 1 / probability;
        break;
    }

    // Convert decimal odds to all formats
    const american = decimal >= 2 
      ? ((decimal - 1) * 100).toFixed(0)
      : (-100 / (decimal - 1)).toFixed(0);
    
    const fractionalDecimal = decimal - 1;
    const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
    const den = 100;
    const num = Math.round(fractionalDecimal * den);
    const divisor = gcd(num, den);
    const fractional = `${num/divisor}/${den/divisor}`;
    
    const implied = ((1 / decimal) * 100).toFixed(1);

    const betAmount = parseFloat(oddsState.betAmount) || 0;
    const toWin = (betAmount * (decimal - 1)).toFixed(2);
    const payout = (betAmount * decimal).toFixed(2);

    setOddsState({
      american: american,
      decimal: decimal.toFixed(3),
      fractional: fractional,
      implied: implied,
      betAmount: oddsState.betAmount,
      toWin: toWin,
      payout: payout
    });
  };

  const handleReset = () => {
    setOddsState({
      american: '',
      decimal: '',
      fractional: '',
      implied: '',
      betAmount: '100',
      toWin: '-',
      payout: '-'
    });
  };

  const handleBetAmountChange = (value: string) => {
    if (value === '') {
      setOddsState(prev => ({ ...prev, betAmount: '', toWin: '-', payout: '-' }));
      return;
    }

    const decimal = parseFloat(oddsState.decimal);
    if (!decimal) return;

    const betAmount = parseFloat(value) || 0;
    const toWin = (betAmount * (decimal - 1)).toFixed(2);
    const payout = (betAmount * decimal).toFixed(2);

    setOddsState(prev => ({
      ...prev,
      betAmount: value,
      toWin,
      payout
    }));
  };

  return (
    <Card className="bg-white shadow-sm border-border/50">
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="american">American Odds</Label>
            <Input
              id="american"
              type="text"
              placeholder="-110"
              value={oddsState.american}
              onChange={(e) => convertOdds(e.target.value, 'american')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fractional">Fractional Odds</Label>
            <Input
              id="fractional"
              type="text"
              placeholder="10/11"
              value={oddsState.fractional}
              onChange={(e) => convertOdds(e.target.value, 'fractional')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="decimal">Decimal Odds</Label>
            <Input
              id="decimal"
              type="text"
              placeholder="1.909"
              value={oddsState.decimal}
              onChange={(e) => convertOdds(e.target.value, 'decimal')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="implied">Implied Odds (%)</Label>
            <Input
              id="implied"
              type="text"
              placeholder="52.4"
              value={oddsState.implied}
              onChange={(e) => convertOdds(e.target.value, 'implied')}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bet-amount">Enter your Bet Amount ($)</Label>
          <Input
            id="bet-amount"
            type="text"
            value={oddsState.betAmount}
            onChange={(e) => handleBetAmountChange(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>To Win</Label>
            <p className="text-lg font-semibold text-gray-900">
              ${oddsState.toWin}
            </p>
          </div>
          <div>
            <Label>Payout</Label>
            <p className="text-lg font-semibold text-gray-900">
              ${oddsState.payout}
            </p>
          </div>
        </div>

        <Button 
          variant="secondary" 
          className="w-full"
          onClick={handleReset}
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};

export default OddsConverterForm;
