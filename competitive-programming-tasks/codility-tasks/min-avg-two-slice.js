function solution(A) {
  let minAvgSum = 10001;
  let minStartPosition = 0;

  for (let i = 0; i < A.length - 1; i++) {
    let sum = A[i];
    for (let j = i + 1; j < A.length; j++) {
      sum += A[j];
      let slice = sum / (j - i + 1);
      if (minAvgSum > slice) {
        minAvgSum = slice;
        minStartPosition = i;
      }
    }
  }

  return minStartPosition;
}

function solution2(A) {
  let minAvgSum = 10001;
  let minStartPosition = 0;
  let tempAvg;

  if (A.length > 1) {
    minAvgSum = (A[0] + A[1]) / 2;
  }
  for (let i = 0; i < A.length - 1; i++){
    tempAvg = (A[i] + A[i+1]) / 2;
    if (tempAvg < minAvgSum) {
      minAvgSum = tempAvg;
      minStartPosition = i;
    }

    if (i < A.length - 2) {
      tempAvg = (A[i] + A[i+1] + A[i+2]) / 3;
      if (tempAvg < minAvgSum) {
        minAvgSum = tempAvg;
        minStartPosition = i;
      }
    }
  }

  return minStartPosition;
}
