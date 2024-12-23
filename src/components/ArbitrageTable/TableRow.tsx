import React from 'react';
import { Button } from "@/components/ui/button";
import { formatDollarAmount } from "./utils";
import { Side, Prop } from "./types";

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const formatOdds = (odds: string) => {
  const oddsNum = parseInt(odds);
  return oddsNum > 0 ? `+${oddsNum}` : odds;
};

const TableRow = ({ prop }: { prop: Prop }) => {
  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        {prop.player}
        <br />
        <span className="text-gray-500">{prop.team}</span>
      </td>
      <td className="px-6 py-4 min-w-[200px]">
        {capitalizeWords(prop.bet)}
      </td>
      <td className="px-6 py-4">
        {prop.sides.map((side, sideIndex) => (
          <div key={sideIndex} className="mb-2">
            {side.book}
          </div>
        ))}
      </td>
      <td className="px-6 py-4">
        {prop.sides.map((side, sideIndex) => (
          <div key={sideIndex} className="mb-2">
            {side.type}
          </div>
        ))}
      </td>
      <td className="px-6 py-4">
        {prop.sides.map((side, sideIndex) => (
          <div key={sideIndex} className="mb-2">
            {side.value} ({formatOdds(side.odds)})
          </div>
        ))}
      </td>
      <td className="px-6 py-4">
        {prop.sides.map((side, sideIndex) => (
          <div key={sideIndex} className="mb-2">
            ${formatDollarAmount(side.wager)}
          </div>
        ))}
      </td>
      <td className="px-6 py-4 font-bold">
        {prop.sides.map((side, sideIndex) => (
          <div key={sideIndex} className="mb-2 text-betting-profit">
            ${formatDollarAmount(side.payout)}
          </div>
        ))}
      </td>
      <td className="px-6 py-4 font-bold text-betting-profit">
        ${formatDollarAmount(prop.profit)}
      </td>
      <td className="px-6 py-4 font-bold text-betting-profit">
        {prop.hold}%
      </td>
      <td className="px-6 py-4">
        {prop.sides.map((side, sideIndex) => (
          <Button
            key={sideIndex}
            variant="outline"
            className="mb-2 w-full bg-primary text-white hover:bg-white hover:text-primary border-primary"
          >
            PLACE BET
          </Button>
        ))}
      </td>
    </tr>
  );
};

export default TableRow;