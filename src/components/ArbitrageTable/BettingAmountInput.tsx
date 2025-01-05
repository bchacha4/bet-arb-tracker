import React from 'react';
import { Input } from "@/components/ui/input";

interface BettingAmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

const BettingAmountInput = ({ value, onChange }: BettingAmountInputProps) => {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="wager-amount" className="text-sm font-medium text-foreground whitespace-nowrap">
        Wager Amount
      </label>
      <div className="relative w-32">
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-foreground/60">$</div>
        <Input
          id="wager-amount"
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-6 bg-white text-foreground border-border/50 transition-colors duration-200 focus:border-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="1000"
        />
      </div>
    </div>
  );
};

export default BettingAmountInput;