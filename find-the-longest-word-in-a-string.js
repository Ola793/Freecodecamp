function findLongestWordLength(str) {
  str = str.split(' ').reduce((current, longest) => current.length > longest.length ? current : longest, '');
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");