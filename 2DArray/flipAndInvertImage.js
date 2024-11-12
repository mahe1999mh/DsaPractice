let matrix = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];

var flipAndInvertImage = function (matrix) {
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
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == 1) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = 1;
      }
    }
  }

  return matrix;
};

flipAndInvertImage(matrix);

[
  {
    id: 1,
    title: "learn JavaScript",
    updated:"2024-10-11",
    taskArrayObj: [],
  },
  {
    id: 2,
    title: "DSA",
    taskArrayObj: [],
  },
];
