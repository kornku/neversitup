function permute(str) {
  const result = new Set();
  const chars = str.split("").sort();

  function backtrack(path, visited) {
    if (path.length === str.length) {
      result.add(path.join(""));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (
        visited[i] ||
        (i > 0 && chars[i] === chars[i - 1] && !visited[i - 1])
      ) {
        continue;
      }

      visited[i] = true;
      path.push(chars[i]);
      backtrack(path, visited);
      path.pop();
      visited[i] = false;
    }
  }

  backtrack([], Array(chars.length).fill(false));
  return Array.from(result);
}

module.exports = permute;
