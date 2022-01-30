function confirmEnding(str, target) {
  return str.substring(str.length - target.length, str.length) === target ? true : false;
}

confirmEnding("Bastian", "n");