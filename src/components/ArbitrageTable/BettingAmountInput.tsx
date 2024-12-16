import React from 'react';
import { Input } from "@/components/ui/input";

interface BettingAmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

const BettingAmountInput = ({ value, onChange }: BettingAmountInputProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-white">$</span>
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-24 bg-table-dark text-white border-table-border"
        placeholder="1000"
      />
    </div>
  );
};

export default BettingAmountInput;