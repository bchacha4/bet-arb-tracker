export const formatDollarAmount = (amount: string) => {
  const number = parseFloat(amount);
  return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const calculateAmounts = (prop: any, totalAmount: number) => {
  const sides = [...prop.sides];
  const holdPercentage = parseFloat(prop.hold) / 100;
  
  const total = parseFloat(totalAmount.toString());
  const ratio = sides[0].odds.startsWith('-') ? 
    Math.abs(parseInt(sides[0].odds)) / 100 :
    100 / parseInt(sides[0].odds);
    
  const wager1 = total * (ratio / (1 + ratio));
  const wager2 = total - wager1;

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