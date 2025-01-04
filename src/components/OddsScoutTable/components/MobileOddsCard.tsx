import React from 'react';
import OddsButton from './OddsButton';

const SPORTSBOOKS = [
  'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM', 
  'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars', 
  'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX', 
  'BetAnySports', 'LowVig.ag'
];

const MobileOddsCard = ({ prop }: { prop: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{prop.player}</h3>
        <p className="text-sm text-gray-500">{prop.team}</p>
        <p className="text-sm font-medium mt-1">{prop.prop}</p>
      </div>

      <div className="space-y-4">
        {SPORTSBOOKS.map((book) => {
          if (!prop.sportsbooks[book]) return null;

          return (
            <div key={book} className="border-t pt-4">
              <h4 className="text-sm font-semibold mb-2">{book}</h4>
              <div className="grid grid-cols-2 gap-2">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileOddsCard;