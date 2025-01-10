export interface GroupedOddsData {
  player: string | null;
  team: string;
  prop: string | null;
  created_at: string;
  sportsbooks: {
    [key: string]: {
      Over: {
        odds: number | null;
        line: number | null;
        link: string | null;
      } | null;
      Under: {
        odds: number | null;
        line: number | null;
        link: string | null;
      } | null;
    };
  };
}

export interface TableRowProps {
  prop: GroupedOddsData;
  visibleSportsbooks: string[];
}