import React from 'react';
import OddsButton from './OddsButton';

const TableRow = ({ prop }: { prop: any }) => {
  const sportsbooks = [
    'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM',
    'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars',
    'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX',
    'BetAnySports', 'LowVig.ag'
  ];

  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        {prop.player}
        <br />
        <span className="text-gray-500">{prop.team}</span>
      </td>
      <td className="px-6 py-4">{prop.prop}</td>
      <td className="px-6 py-4">{prop.outcome}</td>
      {sportsbooks.map((book) => (
        <td key={book} className="px-6 py-4">
          <OddsButton
            odds={prop.sportsbooks[book]?.[prop.outcome]?.odds}
            line={prop.sportsbooks[book]?.[prop.outcome]?.line}
            link={prop.sportsbooks[book]?.[prop.outcome]?.link}
          />
        </td>
      ))}
    </tr>
  );
};

export default TableRow;