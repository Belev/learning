function solution(X, A) {
  let fallenLeaves = new Set();
  for (let i = 0; i < A.length; i++) {
    fallenLeaves.add(A[i]);

    if (fallenLeaves.size === X) {
      return i;
    }
  }
  return -1;
}
