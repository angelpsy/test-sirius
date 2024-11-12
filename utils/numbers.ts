export const getRoundedNumber = (number: number, precision = 2) => {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};