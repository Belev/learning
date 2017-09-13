function solution(S) {
  let openBrackets = 0;
  for (let i = 0; i < S.length; i++) {
    let bracket = S[i];
    if (bracket === '(') {
      openBrackets += 1;
      continue;
    }

    openBrackets -= 1;
    if (openBrackets < 0) {
      return 0;
    }
  }
  return openBrackets === 0 ? 1 : 0;
}
