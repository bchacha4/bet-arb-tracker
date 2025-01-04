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
      className="w-full text-center p-2 hover:bg-gray-100 transition-colors"
      variant="outline"
    >
      <div className="text-sm">
        <div>{line}</div>
        <div>{odds > 0 ? `+${odds}` : odds}</div>
      </div>
    </Button>
  );
};

export default OddsButton;