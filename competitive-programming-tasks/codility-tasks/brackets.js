function solution(S) {
  const closeToOpenBracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  let openBrackets = [];
  for (let i = 0; i < S.length; i++) {
    let bracket = S[i];
    if (bracket === '(' || bracket === '{' || bracket === '[') {
      openBrackets.push(bracket);
      continue;
    }

    let lastOpenBracket = openBrackets.pop();
    if (closeToOpenBracketMap[bracket] !== lastOpenBracket) {
      return 0;
    }
  }
  return openBrackets.length === 0 ? 1 : 0;
}
