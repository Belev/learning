function solution(A) {
  const N = A.length - 2;

  let leftSums = new Array(N).fill(0);
  let rightSums = new Array(N).fill(0);

  let length = N - 1;
  for (let i = 0; i < length; i++) {
    leftSums[i + 1] = Math.max(0, leftSums[i] + A[i + 1]);
    rightSums[length - i - 1] = Math.max(0, rightSums[length - i] + A[length - i + 1]);
  }

  let maxSum = 0;
  for (let i = 0; i < N; i++) {
    maxSum = Math.max(maxSum, leftSums[i] + rightSums[i]);
  }
  return maxSum;
}
