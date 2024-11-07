const permute = require("../src/services/permute");

describe("permute", () => {
  test('should return ["a"] for input "a"', () => {
    expect(permute("a")).toEqual(["a"]);
  });

  test('should return ["ab", "ba"] for input "ab"', () => {
    const result = permute("ab");
    expect(result).toEqual(expect.arrayContaining(["ab", "ba"]));
    expect(result.length).toBe(2);
  });

  test('should return all permutations of "abc"', () => {
    const result = permute("abc");
    expect(result).toEqual(
      expect.arrayContaining(["abc", "acb", "bac", "bca", "cab", "cba"])
    );
    expect(result.length).toBe(6);
  });

  test('should return all permutations of "aabb"', () => {
    const result = permute("aabb");
    expect(result).toEqual(
      expect.arrayContaining(["aabb", "abab", "abba", "baab", "baba", "bbaa"])
    );
    expect(result.length).toBe(6);
  });

  test('should return 1 permutation for input "aaa"', () => {
    const result = permute("aaa");
    expect(result).toEqual(["aaa"]);
  });

  test("should return permutations for input with special characters", () => {
    const result = permute("a#b");
    expect(result).toEqual(
      expect.arrayContaining(["a#b", "ab#", "#ab", "#ba", "b#a", "ba#"])
    );
    expect(result.length).toBe(6);
  });
});
