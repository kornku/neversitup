function findOddOccurrence(arr) {
  const frequencyMap = {};

  arr.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  for (let num in frequencyMap) {
    if (frequencyMap[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}

module.exports = findOddOccurrence;
