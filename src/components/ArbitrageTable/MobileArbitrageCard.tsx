import React from 'react';
import { Button } from "@/components/ui/button";
import { formatDollarAmount } from "./utils";

interface Side {
  type: "Over" | "Under";
  value: string;
  odds: string;
  book: string;
  wager: string;
  payout: string;
}

interface Prop {
  player: string;
  team: string;
  bet: string;
  hold: string;
  profit: string;
  sides: Side[];
  updated: string;
}

const MobileArbitrageCard = ({ prop }: { prop: Prop }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{prop.player}</h3>
        <p className="text-sm text-gray-500">{prop.team}</p>
        <p className="text-sm font-medium mt-1">{prop.bet}</p>
      </div>

      <div className="flex divide-x divide-gray-200">
        {prop.sides.map((side, index) => (
          <div key={index} className="flex-1 px-4">
            <div className="space-y-2 text-center">
              <p className="font-medium">
                {side.type} {side.value} ({side.odds})
              </p>
              <p className="text-sm">
                Wager: <span className="font-semibold">${formatDollarAmount(side.wager)}</span>
              </p>
              <p className="text-sm text-betting-profit">
                Payout: <span className="font-semibold">${formatDollarAmount(side.payout)}</span>
              </p>
              <Button
                variant="outline"
                className="w-full mt-2 text-primary border-primary hover:bg-primary hover:text-white"
              >
                PLACE BET
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 bg-gray-50 -mx-4 -mb-4 p-4 rounded-b-lg">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-sm font-medium">Profit</p>
            <p className="text-lg font-bold text-betting-profit">
              ${formatDollarAmount(prop.profit)}
            </p>
          </div>
          <div className="space-y-1 text-right">
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