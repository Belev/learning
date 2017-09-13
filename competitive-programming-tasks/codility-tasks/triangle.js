function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    let x = A[i];
    let y = A[i + 1];
    let z = A[i + 2];

    if (x + y > z && x + z > y && y + z > x) {
      return 1;
    }
  }
  return 0;
}
