const findOddOccurrence = require("../src/services/findOdd");

describe("findOddOccurrence", () => {
  test("should return 7 when the input is [7]", () => {
    expect(findOddOccurrence([7])).toBe(7);
  });

  test("should return 0 when the input is [0]", () => {
    expect(findOddOccurrence([0])).toBe(0);
  });

  test("should return 2 when the input is [1, 1, 2]", () => {
    expect(findOddOccurrence([1, 1, 2])).toBe(2);
  });

  test("should return 0 when the input is [0, 1, 0, 1, 0]", () => {
    expect(findOddOccurrence([0, 1, 0, 1, 0])).toBe(0);
  });

  test("should return 4 when the input is [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]", () => {
    expect(findOddOccurrence([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
