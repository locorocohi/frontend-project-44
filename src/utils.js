export const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export const getGCD = (a, b) => {
  if (a < b) return getGCD(b, a);
  if (b === 0) return a;
  return getGCD(b, a % b);
};

export const checkForPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
