function solution(A) {
  let eastPassingCars = 0;
  let passingCars = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastPassingCars += 1;
    } else {
      passingCars += eastPassingCars;
    }
  }

  return passingCars > 1000000000 ? -1 : passingCars;
}
