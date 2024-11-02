let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = i + 1; j < matrix.length; j++) {
//     let temp = matrix[i][j];
//     matrix[i][j] = matrix[j][i];
//     matrix[j][i] = temp;
//   }
// }
// console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
  let l = 0;
  let r = matrix.length - 1;

  while (r >= l) {
    let temp = matrix[i][l];
    matrix[i][l] = matrix[i][r];
    matrix[i][r] = temp;
    l++;
    r--;
  }
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (matrixp[i][j] == 1) {
      matrixp[i][j] = 0;
    } else {
      matrixp[i][j] = 1;
    }
  }
}

console.log(matrix);
