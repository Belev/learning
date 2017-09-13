function solution(A) {
  let maxNumber = 0;
  let numbers = new Set();
  for (let i = 0; i < A.length; i++) {
    let number = A[i];
    maxNumber = Math.max(maxNumber, number);
    numbers.add(number);
  }

  for (let i = 1; i <= maxNumber + 1; i++) {
    if (!numbers.has(i)) {
      return i;
    }
  }
}
