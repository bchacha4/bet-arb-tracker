export const formatDollarAmount = (amount: string) => {
  const number = parseFloat(amount);
  return new Intl.NumberFormat('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(number);
};

export const calculateAmounts = (prop: any, totalAmount: number) => {
  const sides = [...prop.sides];
  const holdPercentage = parseFloat(prop.hold) / 100;
  
  const total = totalAmount;
  const ratio = sides[0].odds.startsWith('-') ? 
    Math.abs(parseInt(sides[0].odds)) / 100 :
    100 / parseInt(sides[0].odds);
    
  // Use more efficient calculations
  const wager1 = +(total * (ratio / (1 + ratio))).toFixed(2);
  const wager2 = +(total - wager1).toFixed(2);
  const payout = +(total * (1 + holdPercentage)).toFixed(2);
  
  return {
    sides: [
      {
        ...sides[0],
        wager: wager1.toString(),
        payout: payout.toString()
      },
      {
        ...sides[1],
        wager: wager2.toString(),
        payout: payout.toString()
      }
    ],
    profit: (payout - total).toFixed(2)
  };
};