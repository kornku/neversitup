function smile(arr) {
  const smileyRegex = /^[:;][-)D]/;

  return arr.filter((item) => smileyRegex.test(item)).length;
}

module.exports = smile;
