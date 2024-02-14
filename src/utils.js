export const getRndInt = (min, max) => { // RANDOM
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

/* export const nod = (firstNum, secondNum) => { // Наибольший делитель
  let thirdNum;
  if (firstNum > secondNum) {
    while (secondNum !== 0) {
      thirdNum = secondNum;
      secondNum = firstNum % secondNum;
      firstNum = thirdNum;
    }
  }
  if (firstNum < secondNum) {
    return nod(secondNum, firstNum);
  }
  return thirdNum;
}; */

export const nod = (a, b) => {
  if (a < b) return nod(b, a);
  if (b === 0) return a;
  return nod(b, a % b);
};
