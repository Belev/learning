function solution(N) {
  const sqrtN = Math.floor(Math.sqrt(N));
  const isSquareNumber = sqrtN === Math.sqrt(N);

  let factorsCount = 0;
  for (let i = 1; i <= sqrtN; i++) {
    if (N % i === 0) {
      factorsCount += 1;
    }
  }
  return isSquareNumber ? factorsCount * 2 - 1 : factorsCount * 2;
}
