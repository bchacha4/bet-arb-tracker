import React from 'react';
import { AVAILABLE_SPORTSBOOKS } from '@/constants/sportsbooks';
import OddsButton from './OddsButton';

const MobileOddsCard = ({ prop }: { prop: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{prop.player}</h3>
        <p className="text-sm text-gray-500">{prop.team}</p>
        <p className="text-sm font-medium mt-1">{prop.prop}</p>
      </div>

      <div className="space-y-4">
        {AVAILABLE_SPORTSBOOKS.map((book, index) => {
          if (!prop.sportsbooks[book.value]) return null;

          return (
            <div key={index} className="border-t pt-4">
              <h4 className="text-sm font-medium mb-2">{book.label}</h4>
              <div className="grid grid-cols-2 gap-2">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileOddsCard;