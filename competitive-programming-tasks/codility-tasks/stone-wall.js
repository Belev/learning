function solution(H) {
  let blocksCount = 0;
  let heights = [];
  for (let i = 0; i < H.length; i++) {
    let currentHeight = H[i];

    while (heights.length > 0 && heights[heights.length - 1] > currentHeight) {
      heights.pop();
    }

    if (heights.length > 0 && heights[heights.length - 1] === currentHeight) {
      continue;
    }

    blocksCount += 1;
    heights.push(H[i]);
  }

  return blocksCount;
}
