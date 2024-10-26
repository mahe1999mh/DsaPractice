// O(m*n)

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

let target = 5;

var searchMatrix = function (matrix, target) {
  if (matrix == null || matrix.length < 1 || matrix[0].length < 1) {
    return false;
  }

  let i = 0;
  let j = matrix[0].length - 1;

  while (j >= 0 && i < matrix.length) {
    if (matrix[i][j] == target) {
      return matrix[i][j];
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};

searchMatrix(matrix, target);
