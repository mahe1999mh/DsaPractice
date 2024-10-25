let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [14, 15, 16, 17],
];

let i = 0;
let j = 0;
for (let j = 0; j < array.length; j++) {
  console.log(array[i][j]);
}

j = array.length - 1;
for (let i = 0; i < array.length; i++) {
  console.log(array[i][j]);
}

i = array.length - 1;
for (let j = array.length - 2; j >= 0; j--) {
  console.log(array[i][j]);
}

j = 0;
for (let i = array.length - 2; i > 0; i--) {
  console.log(array[i][j]);
}
