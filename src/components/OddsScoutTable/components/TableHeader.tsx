import React from 'react';

interface TableHeaderProps {
  visibleSportsbooks: string[];
}

const TableHeader = ({ visibleSportsbooks }: TableHeaderProps) => {
  const getDisplayName = (bookmaker: string) => {
    return bookmaker.toUpperCase();
  };

  return (
    <thead className="text-xs uppercase bg-gray-50 sticky top-0 z-10">
      <tr>
        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50">PLAYER/TEAM</th>
        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50">BET</th>
        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50">SIDE</th>
        {visibleSportsbooks.map((book) => (
          <th key={book} className="px-6 py-3 border-b border-gray-200 bg-gray-50">
            {getDisplayName(book)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;