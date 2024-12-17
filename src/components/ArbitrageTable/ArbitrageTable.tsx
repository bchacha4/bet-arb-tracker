import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";

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

const formatDollarAmount = (amount: string) => {
  const number = parseFloat(amount);
  return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const calculateAmounts = (prop: Prop, totalAmount: number) => {
  const sides = [...prop.sides];
  const holdPercentage = parseFloat(prop.hold) / 100;
  
  // Calculate the optimal bet distribution
  const total = parseFloat(totalAmount.toString());
  const ratio = sides[0].odds.startsWith('-') ? 
    Math.abs(parseInt(sides[0].odds)) / 100 :
    100 / parseInt(sides[0].odds);
    
  const wager1 = total * (ratio / (1 + ratio));
  const wager2 = total - wager1;

  // Calculate payouts
  const payout = total * (1 + holdPercentage);
  
  return {
    sides: [
      {
        ...sides[0],
        wager: wager1.toFixed(2),
        payout: payout.toFixed(2)
      },
      {
        ...sides[1],
        wager: wager2.toFixed(2),
        payout: payout.toFixed(2)
      }
    ],
    profit: (payout - total).toFixed(2)
  };
};

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
          <div key={index} className={`${index === 0 ? 'pr-4' : 'pl-4'} flex-1`}>
            <div className="space-y-2">
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

const ArbitrageTable = ({ props, bettingAmount }: ArbitrageTableProps) => {
  const [calculatedProps, setCalculatedProps] = useState(props);
  const isMobile = useIsMobile();

  useEffect(() => {
    const amount = parseFloat(bettingAmount) || 0;
    const updated = props.map(prop => ({
      ...prop,
      ...calculateAmounts(prop, amount)
    }));
    setCalculatedProps(updated);
  }, [bettingAmount, props]);

  if (isMobile) {
    return (
      <div className="space-y-4 px-4">
        {calculatedProps.map((prop, index) => (
          <MobileArbitrageCard key={index} prop={prop} />
        ))}
      </div>
    );
  }

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
          {calculatedProps.map((prop, index) => (
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
                    ${formatDollarAmount(side.wager)}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4">
                {prop.sides.map((side, sideIndex) => (
                  <div key={sideIndex} className="mb-2 text-betting-profit">
                    ${formatDollarAmount(side.payout)}
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 text-betting-profit">${formatDollarAmount(prop.profit)}</td>
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