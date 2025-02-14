
export const AVAILABLE_SPORTSBOOKS = [
  { label: 'FanDuel', value: 'FanDuel' },
  { label: 'DraftKings', value: 'DraftKings' },
  { label: 'BetMGM', value: 'BetMGM' },
  { label: 'ESPN BET', value: 'ESPN BET' },
  { label: 'Caesars', value: 'Caesars' },
  { label: 'BetRivers', value: 'BetRivers' },
  { label: 'Hard Rock Bet', value: 'Hard Rock Bet' },
  { label: 'BallyBet', value: 'Bally Bet' },
  { label: 'betPARX', value: 'betPARX' },
  { label: 'Wind Creek', value: 'Wind Creek' },
  { label: 'Fliff', value: 'Fliff' },
  { label: 'BetOnline.ag', value: 'BetOnline.ag' },
  { label: 'Bovada', value: 'Bovada' },
  { label: 'BetUS', value: 'BetUS' },
  { label: 'MyBookie.ag', value: 'MyBookie.ag' },
  { label: 'LowVig.ag', value: 'LowVig.ag' },
  { label: 'BetAnySports', value: 'BetAnySports' }
];

export type Sportsbook = (typeof AVAILABLE_SPORTSBOOKS)[number]['value'];
