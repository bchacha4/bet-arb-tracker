import React from 'react';
import { Input } from "@/components/ui/input";

interface BettingAmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

const BettingAmountInput = ({ value, onChange }: BettingAmountInputProps) => {
  return (
    <div className="relative w-24">
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</div>
      <Input
        id="wager-amount"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-6 bg-white text-gray-900 border-gray-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="1000"
      />
    </div>
  );
};

export default BettingAmountInput;