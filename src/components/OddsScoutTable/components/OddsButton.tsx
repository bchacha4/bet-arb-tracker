import React from 'react';
import { Button } from "@/components/ui/button";

interface OddsButtonProps {
  type: string;
  line: number;
  odds: number;
  link: string;
}

const OddsButton = ({ type, line, odds, link }: OddsButtonProps) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  const formatOdds = (odds: number) => {
    return odds > 0 ? `+${odds}` : odds.toString();
  };

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className="w-full p-2 text-xs border border-gray-200 hover:bg-gray-50"
    >
      <div className="text-center">
        <div>{type} {line}</div>
        <div className="font-bold">{formatOdds(odds)}</div>
      </div>
    </Button>
  );
};

export default OddsButton;