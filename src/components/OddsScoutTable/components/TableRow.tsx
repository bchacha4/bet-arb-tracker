import React from 'react';
import { AVAILABLE_SPORTSBOOKS } from '@/constants/sportsbooks';
import OddsButton from './OddsButton';

const TableRow = ({ prop }: { prop: any }) => {
  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        {prop.player}
        <br />
        <span className="text-gray-500">{prop.team}</span>
      </td>
      <td className="px-6 py-4">
        {prop.prop}
      </td>
      <td className="px-6 py-4">
        Over/Under
      </td>
      {AVAILABLE_SPORTSBOOKS.map((book, index) => (
        <td key={index} className="px-6 py-4">
          {prop.sportsbooks[book.value] && (
            <div className="space-y-2">
              {prop.sportsbooks[book.value].Over && (
                <OddsButton
                  line={prop.sportsbooks[book.value].Over.line}
                  odds={prop.sportsbooks[book.value].Over.odds}
                  link={prop.sportsbooks[book.value].Over.link}
                  type="Over"
                />
              )}
              {prop.sportsbooks[book.value].Under && (
                <OddsButton
                  line={prop.sportsbooks[book.value].Under.line}
                  odds={prop.sportsbooks[book.value].Under.odds}
                  link={prop.sportsbooks[book.value].Under.link}
                  type="Under"
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