import { expect, it, describe } from "vitest";
import { fizzBuzz } from "../src/fizz";

describe("fizzBuzz", () => {
  // FizzBuzz
  it("should ret FizzBuzz if n%3 nad 5==0", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  // Fizz
  it("should ret fizz if n %3==0", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  // Buzz
  it("should return Buzz if n%5==0", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  // Return #
  it("ret num if None matches", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});
