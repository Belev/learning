function solution(A) { // 66%
  const MAX_NUMBER = 1000000001;
  const length = A.length;

  let startNumberToCountMap = {};
  let leadersFromStart = [];
  let startLeader = MAX_NUMBER;

  let endNumberToCountMap = {};
  let leadersFromEnd = [];
  let endLeader = MAX_NUMBER;

  for (let i = 0; i < length - 1; i++) {
    startNumberToCountMap[A[i]] = startNumberToCountMap[A[i]] || 0;
    startNumberToCountMap[A[i]] += 1;

    const halfNumbers = Math.floor((i + 1) / 2) + 1;
    if (startNumberToCountMap[A[i]] >= halfNumbers) {
      startLeader = A[i];
    } else if (startNumberToCountMap[startLeader] < halfNumbers) {
      startLeader = MAX_NUMBER;
    }
    leadersFromStart.push(startLeader);

    endNumberToCountMap[A[length - i - 1]] = endNumberToCountMap[A[length - i - 1]] || 0;
    endNumberToCountMap[A[length - i - 1]] += 1;

    if (endNumberToCountMap[A[length - i - 1]] >= halfNumbers) {
      endLeader = A[length - i - 1];
    } else if (endNumberToCountMap[endLeader] < halfNumbers) {
      endLeader = MAX_NUMBER;
    }
    leadersFromEnd.unshift(endLeader);
  }

  let equalLeaders = 0;
  for (let i = 0; i < length - 1; i++) {
    if (leadersFromStart[i] === leadersFromEnd[i] && leadersFromStart[i] !== MAX_NUMBER) {
      equalLeaders += 1;
    }
  }
  return equalLeaders;
}

function solution2(A) { // 100%
  const length = A.length;

  let leader;
  let leaderCandidateCount = 0;
  for (let i = 0; i < length; i++) {
    if (leaderCandidateCount === 0) {
      leader = A[i];
      leaderCandidateCount += 1;
      continue;
    }

    if (leader !== A[i]) {
      leaderCandidateCount -= 1;
    } else {
      leaderCandidateCount += 1;
    }
  }

  if (leaderCandidateCount === 0) {
    return 0;
  }

  let leaderCount = 0;
  for (let i = 0; i < length; i++) {
    if (A[i] === leader) {
      leaderCount += 1;
    }
  }
  let equalLeaders = 0;
  let leftLeaderCount = 0;
  for (let i = 0; i < length; i++) {
    if (A[i] === leader) {
      leftLeaderCount += 1;
    }

    if (leftLeaderCount >= Math.floor((i + 1) / 2) + 1 &&
      leaderCount - leftLeaderCount >= Math.floor((length - i - 1) / 2) + 1) {
      equalLeaders += 1;
    }
  }

  return equalLeaders;
}
