import React from 'react';
import OddsButton from './OddsButton';

const formatTeamName = (fullName: string): string => {
  if (!fullName) return '';
  
  // Common suffixes to keep
  const keepSuffixes = ['76ers', 'Trail Blazers'];
  
  // Split the name and get the last word
  const parts = fullName.split(' ');
  const lastWord = parts[parts.length - 1];
  
  // Check if the last word(s) is in keepSuffixes
  for (const suffix of keepSuffixes) {
    if (fullName.endsWith(suffix)) {
      return suffix;
    }
  }
  
  // Return just the last word for other cases
  return lastWord;
};

const formatTeams = (teamString: string): string => {
  if (!teamString) return '';
  
  const [homeTeam, awayTeam] = teamString.split(' vs ');
  return `${formatTeamName(homeTeam)} vs ${formatTeamName(awayTeam)}`;
};

const formatBet = (bet: string): string => {
  if (!bet) return '';
  return bet.toLowerCase().replace(/_/g, ' ');
};

const TableRow = ({ prop }: { prop: any }) => {
  const sportsbooks = [
    'FanDuel', 'ESPN BET', 'DraftKings', 'Fliff', 'BetMGM',
    'Hard Rock Bet', 'BetRivers', 'Bally Bet', 'Caesars',
    'BetOnline.ag', 'Bovada', 'BetUS', 'betPARX',
    'BetAnySports', 'LowVig.ag'
  ];

  return (
    <>
      {/* Over row */}
      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-4 font-medium" rowSpan={2}>
          {prop.player}
          <br />
          <span className="text-gray-500">{formatTeams(prop.team)}</span>
        </td>
        <td className="px-6 py-4 min-w-[160px] whitespace-normal capitalize" rowSpan={2}>
          {formatBet(prop.playerProp)}
        </td>
        <td className="px-6 py-4">Over</td>
        {sportsbooks.map((book) => {
          const bookData = prop.sportsbooks[book];
          return (
            <td key={`${book}-over`} className="px-6 py-4">
              {bookData?.Over && (
                <OddsButton
                  odds={bookData.Over.odds}
                  line={bookData.Over.line}
                  link={bookData.Over.link}
                  outcome="Over"
                />
              )}
            </td>
          );
        })}
      </tr>
      {/* Under row */}
      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-4">Under</td>
        {sportsbooks.map((book) => {
          const bookData = prop.sportsbooks[book];
          return (
            <td key={`${book}-under`} className="px-6 py-4">
              {bookData?.Under && (
                <OddsButton
                  odds={bookData.Under.odds}
                  line={bookData.Under.line}
                  link={bookData.Under.link}
                  outcome="Under"
                />
              )}
            </td>
          );
        })}
      </tr>
    </>
  );
};

export default TableRow;