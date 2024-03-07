import { expect, it, describe } from "vitest";
import { getCoupons } from "../src/discount";

describe("getCoupons", () => {
  it("should return an array of of coupons", () => {
    const coupons = getCoupons();
    expect(typeof coupons).toBe("object");
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array of valid coupons", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array of valid discounts", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupons[0].discount).toBeGreaterThanOrEqual(0);
      expect(coupons[0].discount).toBeLessThanOrEqual(1);
    });
  });
});

// // My Sollution
// describe("getCoupons", () => {
//   it("should return an array of coupon objects", () => {
//     const coupons = getCoupons();
//     expect(coupons).toBeInstanceOf(Array);
//     expect(typeof coupons).toBe("object");
//     expect(coupons[0]).toHaveProperty("code");
//     expect(coupons[0]).toHaveProperty("discount");
//     expect(coupons).toMatchObject([
//       { code: "SAVE20NOW", discount: 0.2 },
//       { code: "DISCOUNT500OFF", discount: 0.5 },
//     ]);
//     expect(coupons.length).toBeGreaterThan(0);
//     expect(coupons[0].discount).toBeGreaterThanOrEqual(0);
//     expect(coupons[0].discount).toBeLessThanOrEqual(1);
//     // expect(coupons).toHaveProperty(["code", "discount"]);
//   });
// });
