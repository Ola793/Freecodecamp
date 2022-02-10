// Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength(str) {
  str = str.split(' ').reduce((current, longest) => current.length > longest.length ? current : longest, '');
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
