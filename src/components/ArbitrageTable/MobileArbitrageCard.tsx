import React from 'react';
import { Button } from "@/components/ui/button";
import { formatDollarAmount } from "./utils";

interface Side {
  type: string;
  value: string;
  odds: string;
  book: string;
  wager: string;
  payout: string;
  link: string;
}

interface Prop {
  player: string;
  team: string;
  bet: string;
  hold: string;
  profit: string;
  sides: Side[];
}

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const getBookmakerUrl = (bookmaker: string): string => {
  // Normalize the bookmaker name by removing spaces and converting to lowercase
  const normalizedBookmaker = bookmaker.toLowerCase().replace(/\s+/g, '');
  
  const urls: { [key: string]: string } = {
    'betonline.ag': 'https://www.betonline.ag/',
    'betmgm': 'https://sports.betmgm.com',
    'betrivers': 'https://betrivers.com',
    'betus': 'https://betus.com',
    'bovada': 'https://bovada.lv',
    'caesars': 'https://www.caesars.com/sportsbook-and-casino',
    'draftkings': 'https://draftkings.com',
    'fanduel': 'https://fanduel.com',
    'lowvig.ag': 'https://lowvig.ag',
    'mybookie.ag': 'https://mybookie.ag',
    'ballybet': 'https://play.ballybet.com/sports#home',
    'betanysports': 'https://betanysports.eu',
    'betparx': 'https://betparx.com',
    'espnbet': 'https://espnbet.com',
    'fliff': 'https://getfliff.com',
    'hardrockbet': 'https://hardrock.bet',
    'windcreek': 'https://play.windcreekcasino.com/'
  };
  
  const url = urls[normalizedBookmaker];
  if (!url) return '#';
  return url;
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
            <p className="font-medium text-center">
              {side.type} {side.value} ({side.odds})
            </p>
            <p className="text-sm text-center">
              Wager: <span className="font-semibold">${formatDollarAmount(side.wager)}</span>
            </p>
            <p className="text-sm text-betting-profit text-center">
              Payout: <span className="font-semibold">${formatDollarAmount(side.payout)}</span>
            </p>
            <Button
              variant="outline"
              className="w-full bg-primary text-white hover:bg-white hover:text-primary border-primary"
              onClick={() => {
                const url = side.link || getBookmakerUrl(side.book);
                if (url !== '#') {
                  window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
                }
              }}
            >
              PLACE BET
            </Button>
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
