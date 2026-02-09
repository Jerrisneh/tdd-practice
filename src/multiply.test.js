import { describe, test, expect } from "vitest";
import { multiply } from "./multiply";

describe("multiply function", () => {
  test("multiplies 2 * 4 to equal 8", () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test("multiplies -3 * 3 to equal -9", () => {
    expect(multiply(-3, 3)).toBe(-9);
  });
});
