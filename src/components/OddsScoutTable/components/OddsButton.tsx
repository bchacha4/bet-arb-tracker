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
      className={`
        shadow-sm bg-white border-gray-100 hover:border-primary group
        ${isMobile 
          ? 'w-full h-[45px]' 
          : 'w-[60px] h-[60px]'
        } 
        text-center p-2 hover:bg-gray-100 transition-all duration-200
      `}
      variant="outline"
    >
      <div className={`text-sm space-y-1 ${isMobile ? 'font-medium' : ''}`}>
        <div className={`${isMobile ? 'text-gray-800' : 'text-gray-900'}`}>{line}</div>
        <div className={`${isMobile ? 'text-primary text-xs' : 'text-gray-600'} ${!isMobile && 'group-hover:text-primary'}`}>
          {odds > 0 ? `+${odds}` : odds}
        </div>
      </div>
    </Button>
  );
};

export default OddsButton;