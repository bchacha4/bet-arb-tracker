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
    wager: string;
    payout: string;
  }[];
  updated: string;
}

interface ArbitrageTableProps {
  props: Prop[];
  bettingAmount: string;
}

const ArbitrageTable = ({ props, bettingAmount }: ArbitrageTableProps) => {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left text-gray-900">
        <thead className="text-xs uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 border-b border-gray-200">PLAYER/TEAM</th>
            <th className="px-6 py-3 border-b border-gray-200">BET</th>
            <th className="px-6 py-3 border-b border-gray-200">SIDES</th>
            <th className="px-6 py-3 border-b border-gray-200">LINE/ODDS</th>
            <th className="px-6 py-3 border-b border-gray-200">WAGER</th>
            <th className="px-6 py-3 border-b border-gray-200">PAYOUT</th>
            <th className="px-6 py-3 border-b border-gray-200">PROFIT</th>
            <th className="px-6 py-3 border-b border-gray-200">PERCENT RETURN</th>
            <th className="px-6 py-3 border-b border-gray-200">UPDATED</th>
            <th className="px-6 py-3 border-b border-gray-200">PLACE BETS</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={index}
              className="bg-white border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-6 py-4 font-medium">
                {prop.player}
                <br />
                <span className="text-gray-500">{prop.team}</span>
              </td>
              <td className="px-6 py-4">{prop.bet}</td>
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
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2">
                    ${side.wager}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2 text-betting-profit">
                    ${side.payout}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 text-betting-profit">${prop.profit}</td>
              <td className="px-6 py-4 text-betting-profit">{prop.hold.replace('-', '')}%</td>
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