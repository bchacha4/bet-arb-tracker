import React from 'react';
import { formatDollarAmount } from "./utils";
import { Side, Prop } from "./types";
import PlaceBetButton from "./components/PlaceBetButton";

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
  const renderPlayerOrTeams = () => {
    if (prop.player) {
      return (
        <>
          {prop.player}
          <br />
          <span className="text-gray-500">{prop.team}</span>
        </>
      );
    }
    // Split the team string to get Home and Away teams
    const [homeTeam, awayTeam] = prop.team.split(' vs. ');
    return (
      <>
        {homeTeam}
        <br />
        <span className="text-gray-500">{awayTeam}</span>
      </>
    );
  };

  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        {renderPlayerOrTeams()}
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
        {prop.sides.map((side, index) => (
          <PlaceBetButton
            key={index}
            link={side.link}
            bookmaker={side.book}
            className={index === 0 ? 'mb-2' : ''}
          />
        ))}
      </td>
    </tr>
  );
};

export default TableRow;