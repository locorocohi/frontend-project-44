export const getRandomInteger = (min, max) => { // RANDOM
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export const nod = (a, b) => {
  if (a < b) return nod(b, a);
  if (b === 0) return a;
  return nod(b, a % b);
};
