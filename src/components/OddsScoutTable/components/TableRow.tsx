import React from 'react';
import OddsButton from './OddsButton';

const SPORTSBOOKS = [
  'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM', 
  'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars', 
  'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX', 
  'BetAnySports', 'LowVig.ag'
];

const TableRow = ({ prop }: { prop: any }) => {
  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        {prop.player}
        <br />
        <span className="text-gray-500">{prop.team}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {prop.prop}
      </td>
      {SPORTSBOOKS.map((book) => (
        <td key={book} className="px-6 py-4">
          {prop.sportsbooks[book] && (
            <div className="space-y-2">
              {prop.sportsbooks[book].Over && (
                <OddsButton
                  type="Over"
                  line={prop.sportsbooks[book].Over.line}
                  odds={prop.sportsbooks[book].Over.odds}
                  link={prop.sportsbooks[book].Over.link}
                />
              )}
              {prop.sportsbooks[book].Under && (
                <OddsButton
                  type="Under"
                  line={prop.sportsbooks[book].Under.line}
                  odds={prop.sportsbooks[book].Under.odds}
                  link={prop.sportsbooks[book].Under.link}
                />
              )}
            </div>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;