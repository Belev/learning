function solution(A) {
  const totalSum = A.reduce((sum, number) => sum + number, 0);
  let leftSum = 0;
  let rightSum = 0;
  let result = Number.MAX_SAFE_INTEGER;

  for(let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum = totalSum - leftSum;
    result = Math.min(result, Math.abs(leftSum - rightSum));
  }

  return result;
}
