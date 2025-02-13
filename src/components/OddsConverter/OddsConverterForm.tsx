
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface OddsState {
  american: string;
  decimal: string;
  fractional: string;
  implied: string;
  betAmount: string;
  toWin: string;
  payout: string;
  error?: string;
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

  const validateAndConvertOdds = (value: string, type: 'american' | 'decimal' | 'fractional' | 'implied') => {
    // First update the input value
    setOddsState(prev => ({
      ...prev,
      [type]: value,
      error: ''
    }));

    if (value === '') {
      handleReset();
      return;
    }

    let decimal = 0;
    let error = '';

    try {
      // Convert input to decimal odds first
      switch (type) {
        case 'american':
          const american = parseFloat(value);
          if (isNaN(american)) {
            error = 'Please enter a valid number';
            return;
          }
          if (american === -100 || american === 0 || (american > -100 && american < 100)) {
            error = 'Odds must be less than -100 or greater than 100';
            return;
          }
          decimal = american > 0 ? (american / 100) + 1 : (100 / Math.abs(american)) + 1;
          break;
        case 'decimal':
          decimal = parseFloat(value);
          if (isNaN(decimal)) {
            error = 'Please enter a valid number';
            return;
          }
          if (decimal <= 1) {
            error = 'Decimal odds must be greater than 1';
            return;
          }
          break;
        case 'fractional':
          if (!value.includes('/')) {
            error = 'Fractional odds must be in format "X/Y"';
            return;
          }
          const [num, den] = value.split('/').map(Number);
          if (isNaN(num) || isNaN(den) || den === 0) {
            error = 'Invalid fractional odds format';
            return;
          }
          decimal = (num / den) + 1;
          break;
        case 'implied':
          const probability = parseFloat(value);
          if (isNaN(probability)) {
            error = 'Please enter a valid number';
            return;
          }
          if (probability <= 0 || probability >= 100) {
            error = 'Implied probability must be between 0 and 100';
            return;
          }
          decimal = 1 / (probability / 100);
          break;
      }

      if (error) {
        setOddsState(prev => ({ ...prev, error }));
        return;
      }

      // Convert decimal odds to all formats
      const americanOdds = decimal >= 2 
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

      setOddsState(prev => ({
        ...prev,
        american: americanOdds,
        decimal: decimal.toFixed(3),
        fractional: fractional,
        implied: implied,
        toWin: toWin,
        payout: payout,
        error: ''
      }));

    } catch (err) {
      setOddsState(prev => ({
        ...prev,
        error: 'Invalid input format'
      }));
    }
  };

  const handleReset = () => {
    setOddsState({
      american: '',
      decimal: '',
      fractional: '',
      implied: '',
      betAmount: '100',
      toWin: '-',
      payout: '-',
      error: ''
    });
  };

  const handleBetAmountChange = (value: string) => {
    if (value === '') {
      setOddsState(prev => ({ ...prev, betAmount: '', toWin: '-', payout: '-' }));
      return;
    }

    const amount = parseFloat(value);
    if (isNaN(amount) || amount < 0) {
      setOddsState(prev => ({
        ...prev,
        betAmount: value,
        error: 'Invalid bet amount'
      }));
      return;
    }

    const decimal = parseFloat(oddsState.decimal);
    if (!decimal) return;

    const toWin = (amount * (decimal - 1)).toFixed(2);
    const payout = (amount * decimal).toFixed(2);

    setOddsState(prev => ({
      ...prev,
      betAmount: value,
      toWin,
      payout,
      error: ''
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
              onChange={(e) => validateAndConvertOdds(e.target.value, 'american')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fractional">Fractional Odds</Label>
            <Input
              id="fractional"
              type="text"
              placeholder="10/11"
              value={oddsState.fractional}
              onChange={(e) => validateAndConvertOdds(e.target.value, 'fractional')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="decimal">Decimal Odds</Label>
            <Input
              id="decimal"
              type="text"
              placeholder="1.909"
              value={oddsState.decimal}
              onChange={(e) => validateAndConvertOdds(e.target.value, 'decimal')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="implied">Implied Odds (%)</Label>
            <Input
              id="implied"
              type="text"
              placeholder="52.4"
              value={oddsState.implied}
              onChange={(e) => validateAndConvertOdds(e.target.value, 'implied')}
            />
          </div>
        </div>

        {oddsState.error && (
          <Alert variant="destructive" className="bg-destructive/15 border-none">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{oddsState.error}</AlertDescription>
          </Alert>
        )}

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
