export interface Side {
  type: string;
  value: string;
  odds: string;
  book: string;
  wager: string;
  payout: string;
}

export interface Prop {
  player: string;
  team: string;
  bet: string;
  hold: string;
  profit: string;
  sides: Side[];
}

export interface ArbitrageTableProps {
  bettingAmount: string;
  selectedSportsbooks?: string[];
  selectedSports?: string[];
}