function solution(A) {
  let maxEnding = Number.MIN_SAFE_INTEGER;
  let maxSlice = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < A.length; i++) {
    maxEnding = Math.max(A[i], maxEnding + A[i]);
    maxSlice = Math.max(maxSlice, maxEnding);
  }
  return maxSlice;
}
