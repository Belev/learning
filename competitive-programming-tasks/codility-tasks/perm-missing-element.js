function solution(A) {
  const maxNumber = A.length + 1;
  const allNumbersSum = ((1 + maxNumber) * maxNumber) / 2;

  let sum = A.reduce((sum, number) => sum + number, 0);
  return allNumbersSum - sum;
}
