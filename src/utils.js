export const getRndInt = (min, max) => { // RANDOM 
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export const nod = (a, b) => {
  let c;
  if (a > b) {
    while (b !== 0) {
      c = b;
      b = a % b;
      a = c;
    }
  }
  if (a < b) {
    return nod(b, a);
  }
  return c;
};


