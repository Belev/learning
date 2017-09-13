function solution(N, P, Q) {
  let semiprimes = new Set();
  let sieve = new Array(P.length + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  let i = 2;
  while (i * i <= N) {
    if (sieve[i]) {
      for (let j = i; j < N + 1; j += i) {
        sieve[j] = false;
      }
    }
    i += 1;
  }

  i = 2;
  while (i * i <= N) {
    if (sieve[i]) {
      for (let j = i; j < N + 1; j += i) {
        if (j % i === 0 && sieve[j / i]) {
          semiprimes.add(j);
        }
      }
    }
    i += 1;
  }

  let prefixSums = [0, 0, 0, 0, 1];
  let maxBound = Math.max.apply(null, Q) + 1;
  for (let i = 5; i < maxBound; i++) {
    if (semiprimes.has(i)) {
      prefixSums.push(prefixSums[prefixSums.length - 1] + 1);
    } else {
      prefixSums.push(prefixSums[prefixSums.length - 1]);
    }
  }

  let result = [];
  for (let i = 0; i < Q.length; i++) {
    result.push(prefixSums[Q[i]] - prefixSums[P[i] - 1]);
  }
  return result;
}
