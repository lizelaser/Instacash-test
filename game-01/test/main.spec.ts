import { expect } from "chai";
import { sumSubSet } from "../src/main";

describe("test", () => {
  it("Find the first subset of 2 numbers of M which sum N", () => {
    const M = [2, 5, 8, 14, 0];
    const N = 10;

    const result = sumSubSet(M, N);
    const expected = [2, 8];

    expect(result).deep.equal(expected);
  });
});
