function solution(A, B) {
  let down = [];

  let aliveFish = 0;
  for (let i = 0; i < A.length; i++) {
    let fishSize = A[i];
    if (B[i] === 1) {
      down.push(fishSize);
      continue;
    }

    let upFishEatAllDown = true;
    while (down.length !== 0) {
      let downFishSize = down.pop();
      if (downFishSize > fishSize) {
        down.push(downFishSize);
        upFishEatAllDown = false;
        break;
      }
    }

    if (upFishEatAllDown) {
      aliveFish += 1;
    }
  }
  return aliveFish + down.length;
}
