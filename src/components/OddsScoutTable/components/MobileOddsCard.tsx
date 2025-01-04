import React from 'react';
import OddsButton from './OddsButton';

const MobileOddsCard = ({ prop }: { prop: any }) => {
  const sportsbooks = [
    'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM',
    'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars',
    'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX',
    'BetAnySports', 'LowVig.ag'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{prop.player}</h3>
        <p className="text-sm text-gray-500">{prop.team}</p>
        <p className="text-sm font-medium mt-1">{prop.prop}</p>
      </div>

      <div className="space-y-4">
        {sportsbooks.map((book) => {
          const bookData = prop.sportsbooks[book];
          if (!bookData?.Over && !bookData?.Under) return null;

          return (
            <div key={book} className="flex justify-between items-center">
              <span className="text-sm font-medium">{book}</span>
              <div className="flex flex-col gap-2">
                <OddsButton
                  odds={bookData?.Over?.odds}
                  line={bookData?.Over?.line}
                  link={bookData?.Over?.link}
                  outcome="Over"
                />
                <OddsButton
                  odds={bookData?.Under?.odds}
                  line={bookData?.Under?.line}
                  link={bookData?.Under?.link}
                  outcome="Under"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileOddsCard;