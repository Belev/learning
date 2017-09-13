function solution(A) {
  let previousMax = 0;
  let currentMax = 0;
  let max = 0;
  for (let i = 1; i < A.length; i++) {
    currentMax = Math.max(A[i] - A[i - 1], A[i] - A[i - 1] + previousMax);
    max = Math.max(max, currentMax);
    previousMax = currentMax;
  }
  return max;
}
