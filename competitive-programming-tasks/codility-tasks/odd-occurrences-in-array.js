function solution(A) {
  const numberCountMap = A.reduce((numberCountMap, number) => {
    numberCountMap[number] = (numberCountMap[number] + 1) || 1;
    return numberCountMap;
  }, {});

  let result;
  Object.keys(numberCountMap).forEach(key => {
    if (numberCountMap[key] % 2 === 1) {
      result = +key;
    }
  });
  return result;
}
