function solution(N, A) {
  let counters = new Array(N).fill(0);
  let maxCounter = 0;
  let setToMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      let counterIndex = A[i] - 1;
      if (counters[counterIndex] < setToMax) {
        counters[counterIndex] = setToMax;
      }

      counters[counterIndex] += 1;
      maxCounter = Math.max(maxCounter, counters[counterIndex]);
    } else {
      setToMax = maxCounter;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < setToMax) {
      counters[i] = setToMax;
    }
  }

  return counters;
}
