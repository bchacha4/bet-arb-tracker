import React from 'react';
import { formatDollarAmount } from "./utils";
import { Prop } from "./types";
import PlaceBetButton from "./components/PlaceBetButton";

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const MobileArbitrageCard = ({ prop }: { prop: Prop }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{prop.player}</h3>
        <p className="text-sm text-gray-500">{prop.team}</p>
        <p className="text-sm font-medium mt-1">{capitalizeWords(prop.bet)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {prop.sides.map((side, index) => (
          <div key={index} className="space-y-2">
            <div className="text-center">
              <p className="font-medium">
                {side.type} {side.value} ({side.odds})
              </p>
              <p className="text-sm text-gray-600 font-medium">{side.book}</p>
            </div>
            <p className="text-sm text-center">
              Wager: <span className="font-semibold">${formatDollarAmount(side.wager)}</span>
            </p>
            <p className="text-sm text-betting-profit text-center">
              Payout: <span className="font-semibold">${formatDollarAmount(side.payout)}</span>
            </p>
            <PlaceBetButton
              link={side.link}
              bookmaker={side.book}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-sm font-medium">Profit</p>
            <p className="text-lg font-bold text-betting-profit">
              ${formatDollarAmount(prop.profit)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">Percent Return</p>
            <p className="text-lg font-bold text-betting-profit">
              {prop.hold.replace('-', '')}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileArbitrageCard;