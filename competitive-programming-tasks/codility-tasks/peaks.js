function solution(A) {
  let peakIndices = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peakIndices.push(i);
    }
  }

  for (let blocks = peakIndices.length; blocks >= 1; blocks--) {
    if (A.length % blocks === 0) {
      let visitedBlocks = 0;
      let blockSize = A.length / blocks;
      for (let peakIndex of peakIndices) {
        if (Math.floor(peakIndex / blockSize) === visitedBlocks) {
          visitedBlocks += 1;
        }
      }
      if (visitedBlocks === blocks) {
        return blocks;
      }
    }
  }
  return 0;
}
