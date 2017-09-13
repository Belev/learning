function solution(A) { // 68%
  let intersections = 0;
  for (let i = 0; i < A.length - 1; i++) {
    const fromI = i - A[i];
    const toI = i + A[i];
    for (let j = i + 1; j < A.length; j++) {
      const fromJ = j - A[j];
      const toJ = j + A[j];

      if ((fromI <= fromJ && fromJ <= toI) || (fromJ <= fromI && fromI <= toJ)) {
        intersections += 1;
      }
    }
  }
  return intersections > 10000000 ? -1 : intersections;
}

function solution2(A) { // 100%
  let circles = [];
  for (let i = 0; i < A.length; i++) {
    circles.push([i - A[i], 1], [i + A[i], -1]);
  }
  circles.sort((a, b) => {
    if (a[0] - b[0] !== 0) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  let intersections = 0;
  let activeCircles = 0;

  for (let i = 0; i < circles.length; i++) {
    if (circles[i][1] === 1) {
      intersections += activeCircles;
    }
    activeCircles += circles[i][1];

    if (intersections > 10000000) {
      return -1;
    }
  }

  return intersections;
}
