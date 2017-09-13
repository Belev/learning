function solution(N) {
  const binaryNumber = N.toString(2);
  let maxBinaryGap = 0;
  let currentBinaryGap = 0;
  for (let i = 0; i < binaryNumber.length; i++) {
    let digit = +binaryNumber[i];
    if (digit === 1) {
      maxBinaryGap = Math.max(maxBinaryGap, currentBinaryGap);
      currentBinaryGap = currentBinaryGap > 0 ? 0 : currentBinaryGap;
    } else {
      currentBinaryGap += 1;
    }
  }
  return maxBinaryGap;
}
