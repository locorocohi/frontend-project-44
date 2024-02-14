export const getRndInt = (min, max) => { // RANDOM
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export const nod = (a, b) => { // Наибольший делитель
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

export const isThisPrime = (number) => { // Проверка на простоту
  if (number <= 1 || number === 9) {
    return 'no';
  } if (number === 2) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
    return 'yes';
  }
};
