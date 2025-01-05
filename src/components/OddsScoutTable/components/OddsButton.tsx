import React from 'react';
import { Button } from "@/components/ui/button";
import { formatUrl } from "@/components/ArbitrageTable/utils/urlUtils";
import { useIsMobile } from "@/hooks/use-mobile";

interface OddsButtonProps {
  odds?: number;
  line?: number;
  link?: string;
  outcome: 'Over' | 'Under';
  bookmaker: string;
}

const OddsButton = ({ odds, line, link, outcome, bookmaker }: OddsButtonProps) => {
  const isMobile = useIsMobile();
  
  if (!odds || !line) return null;

  const handleClick = () => {
    const url = formatUrl(link || null, bookmaker);
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`${isMobile ? 'w-[70px] h-[70px]' : 'w-[60px] h-[60px]'} text-center p-2 hover:bg-gray-100 transition-colors`}
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