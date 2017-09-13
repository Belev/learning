function solution(N) {
  const sqrtN = Math.ceil(Math.sqrt(N));
  let minPerimeter = Number.MAX_SAFE_INTEGER;
  for (let a = 1; a <= sqrtN; a++) {
    if (N % a !== 0) {
      continue;
    }
    let b = N / a;
    minPerimeter = Math.min(minPerimeter, 2 * (a + b));
  }
  return minPerimeter;
}
