export const getBookmakerUrl = (bookmaker: string): string => {
  const normalizedBookmaker = bookmaker.toLowerCase().replace(/\s+/g, '');
  
  const urls: { [key: string]: string } = {
    'betonline.ag': 'https://www.betonline.ag',
    'betmgm': 'https://sports.betmgm.com',
    'betrivers': 'https://betrivers.com',
    'betus': 'https://betus.com',
    'bovada': 'https://bovada.lv',
    'caesars': 'https://www.caesars.com/sportsbook-and-casino',
    'draftkings': 'https://draftkings.com',
    'fanduel': 'https://fanduel.com',
    'lowvig.ag': 'https://lowvig.ag',
    'mybookie.ag': 'https://mybookie.ag',
    'ballybet': 'https://play.ballybet.com/sports',
    'betanysports': 'https://betanysports.eu',
    'betparx': 'https://betparx.com',
    'espnbet': 'https://espnbet.com',
    'fliff': 'https://getfliff.com',
    'hardrockbet': 'https://hardrock.bet',
    'windcreek': 'https://play.windcreekcasino.com'
  };
  
  return urls[normalizedBookmaker] || '#';
};

export const formatUrl = (link: string | null, bookmaker: string): string => {
  if (!link || link === '#') {
    return getBookmakerUrl(bookmaker);
  }
  
  try {
    // Check if the link is a valid URL
    new URL(link);
    return link;
  } catch {
    // If the link is not a valid URL, try to fix it
    if (!link.startsWith('http')) {
      return `https://${link}`;
    }
    return link;
  }
};

export const openUrl = (url: string) => {
  if (url && url !== '#') {
    window.open(url, '_blank');
  }
};