import { describe, test, expect } from "vitest";
import { reverseString } from "./reverseString";

describe("reverseString function", () => {
  test("reverses 'hello' to 'olleh'", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses 'abc' to 'cba'", () => {
    expect(reverseString("abc")).toBe("cba");
  });
});
