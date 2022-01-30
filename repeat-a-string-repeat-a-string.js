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