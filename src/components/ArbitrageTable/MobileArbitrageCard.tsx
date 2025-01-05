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
    <div className="bg-table-dark rounded-lg border border-table-border p-4 mb-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{prop.player}</h3>
        <p className="text-sm text-foreground/60">{prop.team}</p>
        <p className="text-sm font-medium mt-1 text-foreground">{capitalizeWords(prop.bet)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {prop.sides.map((side, index) => (
          <div key={index} className="space-y-2">
            <div className="text-center">
              <p className="font-medium text-foreground">
                {side.type} {side.value} ({side.odds})
              </p>
              <p className="text-sm text-foreground/60 font-medium">{side.book}</p>
            </div>
            <p className="text-sm text-center text-foreground">
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

      <div className="mt-4 pt-4 border-t border-table-border">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">Profit</p>
            <p className="text-lg font-bold text-betting-profit">
              ${formatDollarAmount(prop.profit)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">Percent Return</p>
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