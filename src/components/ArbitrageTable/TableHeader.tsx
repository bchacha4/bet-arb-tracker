import React from 'react';

const TableHeader = () => {
  return (
    <thead className="text-xs uppercase bg-gray-50">
      <tr>
        <th className="px-6 py-3 border-b border-gray-200">PLAYER/TEAM</th>
        <th className="px-6 py-3 border-b border-gray-200">BET</th>
        <th className="px-6 py-3 border-b border-gray-200">SPORTSBOOK</th>
        <th className="px-6 py-3 border-b border-gray-200">SIDES</th>
        <th className="px-6 py-3 border-b border-gray-200">LINE/ODDS</th>
        <th className="px-6 py-3 border-b border-gray-200">WAGER</th>
        <th className="px-6 py-3 border-b border-gray-200">PAYOUT</th>
        <th className="px-6 py-3 border-b border-gray-200">PROFIT</th>
        <th className="px-6 py-3 border-b border-gray-200 whitespace-nowrap">% RETURN</th>
        <th className="px-6 py-3 border-b border-gray-200">PLACE BETS</th>
      </tr>
    </thead>
  );
};

export default TableHeader;