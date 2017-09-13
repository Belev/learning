function solution(A, K) {
  const length = A.length;
  const rotationPositions = K % length;
  let rotatedArray = [];
  let newIndex;
  A.forEach((number, index) => {
    newIndex = (index + rotationPositions) % length;
    rotatedArray[newIndex] = number;
  });
  return rotatedArray;
}
