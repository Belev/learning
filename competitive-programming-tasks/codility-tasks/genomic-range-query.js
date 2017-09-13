function solution(S, P, Q) { // 60%
  const impactFactorsMap = { A: 1, C: 2, G: 3, T: 4 };

  let minImpactFactors = [];
  for (let i = 0; i < P.length; i++) {
    const from = P[i];
    const to = Q[i];

    let minImpactFactor = 5;
    for (let j = from; j <= to; j++) {
      minImpactFactor = Math.min(minImpactFactor, impactFactorsMap[S[j]]);
    }
    minImpactFactors.push(minImpactFactor);
  }
  return minImpactFactors;
}


function solution2(S, P, Q) { // 75%
  const impactFactorsMap = { A: 1, C: 2, G: 3, T: 4 };

  let impactFactorsPositions = [[], [], [], []];
  for (let i = 0; i < S.length; i++) {
    impactFactorsPositions[impactFactorsMap[S[i]] - 1].push(i);
  }

  let minImpactFactors = [];
  for (let i = 0; i < P.length; i++) {
    const from = P[i];
    const to = Q[i];

    let foundMinImpact = false;
    for (let j = 0; j < impactFactorsPositions[0].length; j++) {
      const position = impactFactorsPositions[0][j];
      if (position >= from && position <= to) {
        minImpactFactors.push(1);
        foundMinImpact = true;
        break;
      }
    }

    if (foundMinImpact) {
      continue;
    }

    for (let j = 0; j < impactFactorsPositions[1].length; j++) {
      const position = impactFactorsPositions[1][j];
      if (position >= from && position <= to) {
        minImpactFactors.push(2);
        foundMinImpact = true;
        break;
      }
    }

    if (foundMinImpact) {
      continue;
    }

    for (let j = 0; j < impactFactorsPositions[2].length; j++) {
      const position = impactFactorsPositions[2][j];
      if (position >= from && position <= to) {
        minImpactFactors.push(3);
        foundMinImpact = true;
        break;
      }
    }

    if (foundMinImpact) {
      continue;
    }

    minImpactFactors.push(4);
  }
  return minImpactFactors;
}

function solution3(S, P, Q) { // 100%
  let A = 0;
  let C = 0;
  let G = 0;
  let T = 0;
  let impactsCount = [];
  impactsCount.push([0, 0, 0, 0]);

  for (let i = 0; i < S.length; i++) {
    switch(S[i]) {
      case 'A':
        A += 1;
        break;
      case 'C':
        C += 1;
        break;
      case 'G':
        G += 1;
        break;
      case 'T':
        T += 1;
        break;
    }
    impactsCount.push([A, C, G, T]);
  }

  let minImpactFactors = [];
  for (let i = 0; i < P.length; i++) {
    let startImpactsCount = impactsCount[P[i]];
    let endImpactsCount = impactsCount[Q[i] + 1];

    if (endImpactsCount[0] - startImpactsCount[0] > 0) {
      minImpactFactors.push(1);
      continue;
    }

    if (endImpactsCount[1] - startImpactsCount[1] > 0) {
      minImpactFactors.push(2);
      continue;
    }

    if (endImpactsCount[2] - startImpactsCount[2] > 0) {
      minImpactFactors.push(3);
      continue;
    }

    minImpactFactors.push(4);
  }

  return minImpactFactors;
}
