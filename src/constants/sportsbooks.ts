export const AVAILABLE_SPORTSBOOKS = [
  { label: 'BetOnline.ag', value: 'BetonlineAG' },
  { label: 'BetMGM', value: 'BetMGM' },
  { label: 'BetRivers', value: 'BetRivers' },
  { label: 'BetUS', value: 'BetUS' },
  { label: 'Bovada', value: 'Bovada' },
  { label: 'Caesars', value: 'Caesars' },
  { label: 'DraftKings', value: 'DraftKings' },
  { label: 'FanDuel', value: 'FanDuel' },
  { label: 'LowVig', value: 'LowVig' },
  { label: 'MyBookie.ag', value: 'MyBookieAG' },
  { label: 'BallyBet', value: 'BallyBet' },
  { label: 'BetAnySports', value: 'BetAnySports' },
  { label: 'betPARX', value: 'betPARX' },
  { label: 'ESPNBet', value: 'ESPNBet' },
  { label: 'Fliff', value: 'Fliff' },
  { label: 'Hard Rock Bet', value: 'Hard Rock Bet' },
  { label: 'Wind Creek', value: 'Wind Creek' }
];

export type Sportsbook = (typeof AVAILABLE_SPORTSBOOKS)[number]['value'];