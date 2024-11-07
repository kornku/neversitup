const countSmileys = require("../src/services/smile");

describe("countSmileys", () => {
  test('should return 2 for [" :)", ";(", ";}", ":-D"]', () => {
    expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
  });

  test('should return 3 for [";D", ":-(", ":-)", ";~)"]', () => {
    expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });

  test('should return 1 for [";]", ":[", ";*", ":$", ";-D"]', () => {
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });

  test("should return 0 for an array without any smileys", () => {
    expect(countSmileys(["hello", "world", "test"])).toBe(0);
  });

  test("should return 0 for an empty array", () => {
    expect(countSmileys([])).toBe(0);
  });

  test("should correctly count smileys in mixed arrays", () => {
    expect(
      countSmileys(["hello", ":)", "world", ";)", ":-D", ":-(", ":$"])
    ).toBe(4);
  });
});
