import React from 'react';

const SPORTSBOOKS = [
  'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM', 
  'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars', 
  'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX', 
  'BetAnySports', 'LowVig.ag'
];

const TableHeader = () => {
  return (
    <thead className="text-xs uppercase bg-gray-50">
      <tr>
        <th className="px-6 py-3 border-b border-gray-200 whitespace-nowrap">PLAYER/TEAM</th>
        <th className="px-6 py-3 border-b border-gray-200 whitespace-nowrap">BET</th>
        {SPORTSBOOKS.map((book) => (
          <th key={book} className="px-6 py-3 border-b border-gray-200 whitespace-nowrap">
            {book}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;