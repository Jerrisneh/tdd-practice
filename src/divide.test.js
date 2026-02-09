import { describe, test, expect } from "vitest";
import { divide } from "./divide";

describe("divide function", () => {
  test("divides 10/2 to equals 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("returns null when dividing by 0", () => {
    expect(divide(10, 0)).toBe(null);
  });
});
