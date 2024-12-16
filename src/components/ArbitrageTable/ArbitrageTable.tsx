import React from 'react';
import { Button } from "@/components/ui/button";

interface Prop {
  player: string;
  team: string;
  bet: string;
  hold: string;
  profit: string;
  sides: {
    type: "Over" | "Under";
    value: string;
    odds: string;
    book: string;
  }[];
  wager: string;
  payout: string;
  updated: string;
}

interface ArbitrageTableProps {
  props: Prop[];
  bettingAmount: string;
}

const ArbitrageTable = ({ props, bettingAmount }: ArbitrageTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-200">
        <thead className="text-xs uppercase bg-table-dark">
          <tr>
            <th className="px-6 py-3">PLAYER/TEAM</th>
            <th className="px-6 py-3">BET</th>
            <th className="px-6 py-3">HOLD</th>
            <th className="px-6 py-3">PROFIT</th>
            <th className="px-6 py-3">SIDES</th>
            <th className="px-6 py-3">LINE/ODDS</th>
            <th className="px-6 py-3">WAGER</th>
            <th className="px-6 py-3">PAYOUT</th>
            <th className="px-6 py-3">UPDATED</th>
            <th className="px-6 py-3">PLACE BETS</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-table-row" : "bg-table-altRow"
              } border-b border-table-border`}
            >
              <td className="px-6 py-4 font-medium">
                {prop.player}
                <br />
                <span className="text-gray-400">{prop.team}</span>
              </td>
              <td className="px-6 py-4">{prop.bet}</td>
              <td className="px-6 py-4 text-betting-loss">{prop.hold}</td>
              <td className="px-6 py-4 text-betting-profit">${prop.profit}</td>
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
                    {side.value} ({side.odds})
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">${prop.wager}</td>
              <td className="px-6 py-4 text-betting-profit">${prop.payout}</td>
              <td className="px-6 py-4">{prop.updated}</td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <Button
                    key={sideIndex}
                    variant="outline"
                    className="mb-2 w-full text-primary border-primary hover:bg-primary hover:text-white"
                  >
                    PLACE BET
                  </Button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArbitrageTable;