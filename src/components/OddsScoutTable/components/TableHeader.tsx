import React from 'react';
import { AVAILABLE_SPORTSBOOKS } from '@/constants/sportsbooks';

const TableHeader = () => {
  return (
    <thead className="text-xs uppercase bg-gray-50">
      <tr>
        <th className="px-6 py-3 border-b border-gray-200">PLAYER/TEAM</th>
        <th className="px-6 py-3 border-b border-gray-200">BET</th>
        <th className="px-6 py-3 border-b border-gray-200">OVER/UNDER</th>
        {AVAILABLE_SPORTSBOOKS.map((book, index) => (
          <th key={index} className="px-6 py-3 border-b border-gray-200">
            {book.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;