export const performDivisibility = (balance, divisibility) => {
  for (let i = 0; i < divisibility; i++) {
    balance = balance / 10;
  }
  return balance;
};

export const standardizeString = string => {
  return (string.charAt(0).toUpperCase() + string.slice(1)).replace('_', ' ');
};
