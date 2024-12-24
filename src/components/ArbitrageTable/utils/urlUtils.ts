export const getBookmakerUrl = (bookmaker: string): string => {
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

export const formatUrl = (link: string | null, bookmaker: string): string => {
  const url = link && link !== '#' ? link : getBookmakerUrl(bookmaker);
  return url;
};

export const openUrl = (url: string) => {
  if (url !== '#') {
    window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
  }
};