import React from 'react';

interface OddsButtonProps {
  line: number;
  odds: number;
  link: string;
  type: 'Over' | 'Under';
}

const OddsButton = ({ line, odds, link, type }: OddsButtonProps) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      <div className="text-xs text-gray-500">{type}</div>
      <div className="font-medium">{line}</div>
      <div className="text-xs">{odds > 0 ? `+${odds}` : odds}</div>
    </button>
  );
};

export default OddsButton;