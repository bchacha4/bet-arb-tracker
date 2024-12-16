import React from 'react';
import { Input } from "@/components/ui/input";

interface BettingAmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

const BettingAmountInput = ({ value, onChange }: BettingAmountInputProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-900">$</span>
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-24 bg-white text-gray-900 border-gray-200"
        placeholder="1000"
      />
    </div>
  );
};

export default BettingAmountInput;