function solution(A) {
  let peakIndices = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peakIndices.push(i);
    }
  }

  const peaksCount = peakIndices.length;
  if (peaksCount <= 2) {
    return peaksCount;
  }

  const maxFlags = Math.floor(Math.sqrt(peakIndices[peaksCount - 1] - peakIndices[0])) + 1;
  for (let flags = maxFlags; flags >= 2; flags--) {
    let flagsCount = 1;
    let currentPeakIndex = peakIndices[0];
    for (let i = 1; i < peaksCount; i++) {
      if (currentPeakIndex + flags <= peakIndices[i]) {
        currentPeakIndex = peakIndices[i];
        flagsCount += 1;
      }
    }
    if (flagsCount >= flags) {
      return flags;
    }
  }

  return 2;
}
