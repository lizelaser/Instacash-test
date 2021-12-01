export function sumSubSet(set: number[], sum: number): number[] | boolean {
  for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < set.length; j++) {
      if (j === i) {
        continue;
      }
      if (set[i] + set[j] === sum) {
        return [set[i], set[j]];
      }
    }
  }
  return false;
}
