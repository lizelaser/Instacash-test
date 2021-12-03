import { expect } from "chai";
import { sumSubMap, sumSubSet } from "../src/main";

describe("test", () => {
  it("Find the first subset of 2 numbers of M which sum N", () => {
    const M = [2, 5, 8, 14, 0];
    const N = 10;

    const result = sumSubSet(M, N);
    const expected = [2, 8];

    expect(result).deep.equal(expected);
  });

  it("Find the first subset of 2 numbers of M which sum N", () => {
    const M = [6, 5, 8, 14, 4];
    const N = 10;

    const result = sumSubMap(M, N);
    const expected = [6, 4];

    expect(result).deep.equal(expected);
  });
});
