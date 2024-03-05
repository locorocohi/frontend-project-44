export const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export const nod = (a, b) => {
  if (a < b) return nod(b, a);
  if (b === 0) return a;
  return nod(b, a % b);
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
