import { describe, test, expect } from "vitest";
import { add } from "./add";

describe("add function", () => {
  test("adds 2 + 3 to equals 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("add -1 + 5 to equals 4", () => {
    expect(add(-1, 5)).toBe(4);
  });
});
