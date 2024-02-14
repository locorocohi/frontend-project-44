export default (number) => {
    if (number <= 1 || number === 9) {
      return false;
    } if (number === 2) {
      return true;
    }
    // eslint-disable-next-line no-unreachable-loop
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
      return true;
    }
  };