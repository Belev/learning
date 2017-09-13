function solution(A) {
  A.sort((a, b) => b - a);
  let biggestNumbersSum = A[0] * A[1] * A[2];
  let smallestTwoAndBiggestNumberSum = A[0] * A[A.length - 1] * A[A.length - 2];
  return biggestNumbersSum > smallestTwoAndBiggestNumberSum ? biggestNumbersSum : smallestTwoAndBiggestNumberSum;
}
