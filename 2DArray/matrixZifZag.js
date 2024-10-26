let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12, 13],
  [14, 15, 16, 17],
];

for (let i = 0; i < arr.length; i++) {
  if (i / 2 == 0) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i][j]);
    }
  } else {
    for (let j = arr.length - 1; j >= 0; j--) {
      console.log(arr[i][j]);
    }
  }
}

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j][i] == tergat) return true;
  }
}
