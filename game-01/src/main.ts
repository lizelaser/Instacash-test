// SOLUTION 1: MAP
export function sumSubMap(set: number[], sum: number): number[] | false {
  const cache = new Map(); // 8:2 5:5 2:8
  for (let i = 0; i < set.length; i++) {
    const complement = sum - set[i];
    if (complement < 0) {
      continue;
    }
    if (cache.has(set[i])) {
      return [complement, set[i]];
    } else {
      cache.set(complement, set[i]);
    }
  }
  return false;
}

// SOLUTION 2: SET
export function sumSubSet(set: number[], sum: number): number[] | false {
  const cache = new Set(); // 8 5 2 -4 0
  for (let i = 0; i < set.length; i++) {
    const complement = sum - set[i];
    if (complement < 0) {
      continue;
    }
    if (cache.has(set[i])) {
      return [complement, set[i]];
    } else {
      cache.add(complement);
    }
  }
  return false;
}
