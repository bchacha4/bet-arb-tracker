import React from 'react';

const TableHeader = () => {
  return (
    <thead className="text-xs uppercase bg-table-dark">
      <tr>
        <th className="px-6 py-3 border-b border-table-border">PLAYER/TEAM</th>
        <th className="px-6 py-3 border-b border-table-border">BET</th>
        <th className="px-6 py-3 border-b border-table-border">SPORTSBOOK</th>
        <th className="px-6 py-3 border-b border-table-border">SIDES</th>
        <th className="px-6 py-3 border-b border-table-border">LINE/ODDS</th>
        <th className="px-6 py-3 border-b border-table-border">WAGER</th>
        <th className="px-6 py-3 border-b border-table-border">PAYOUT</th>
        <th className="px-6 py-3 border-b border-table-border">PROFIT</th>
        <th className="px-6 py-3 border-b border-table-border whitespace-nowrap">% RETURN</th>
        <th className="px-6 py-3 border-b border-table-border">PLACE BETS</th>
      </tr>
    </thead>
  );
};

export default TableHeader;