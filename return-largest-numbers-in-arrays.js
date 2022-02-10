// Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  let arrOfMax = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let subArr = arr[i];
      subArr.sort((a, b) => b - a);
      arrOfMax.push(subArr[0]);
    }
  }
  return arrOfMax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
