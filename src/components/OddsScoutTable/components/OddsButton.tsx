import React from 'react';
import { Button } from "@/components/ui/button";

interface OddsButtonProps {
  odds?: number;
  line?: number;
  link?: string;
}

const OddsButton = ({ odds, line, link }: OddsButtonProps) => {
  if (!odds || !line) return null;

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="w-14 h-14 text-center p-2 hover:bg-gray-100 transition-colors"
      variant="outline"
    >
      <div className="text-sm space-y-1">
        <div className="font-medium">{line}</div>
        <div className="text-gray-600">{odds > 0 ? `+${odds}` : odds}</div>
      </div>
    </Button>
  );
};

export default OddsButton;