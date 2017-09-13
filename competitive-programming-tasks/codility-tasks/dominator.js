function solution(A) {
  const halfCount = Math.floor(A.length / 2) + 1;
  let numberToCountMap = {};

  for (let i = 0; i < A.length; i++) {
    numberToCountMap[A[i]] = numberToCountMap[A[i]] || 0;
    numberToCountMap[A[i]] += 1;

    if (numberToCountMap[A[i]] >= halfCount) {
      return i;
    }
  }

  return -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 4]));
