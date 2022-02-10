// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  if (num > 0) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(str);
    }
    str = arr.join('');
  } else str = '';
  return str;
}

repeatStringNumTimes("abc", 3);
