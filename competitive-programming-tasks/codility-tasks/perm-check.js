function solution(A) {
  let permutationSum = (1 + A.length) * A.length / 2;
  let minNumber = Number.MAX_SAFE_INTEGER;
  let maxNumber = 0;
  let numbers = new Set();

  for (let i = 0; i < A.length; i++) {
    let number = A[i];
    minNumber = Math.min(minNumber, number);
    maxNumber = Math.max(maxNumber, number);
    numbers.add(number);
  }

  const correctNumbersCount = numbers.size === A.length;
  const correctSum = permutationSum === ((minNumber + maxNumber) * A.length / 2);
  return correctNumbersCount && correctSum ? 1 : 0;
}
