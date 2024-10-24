function decimalToBinary(n) {
  let str = "";

  while (n >= 1) {
    let x = Math.floor(n % 2);
    n = n / 2;
    str = x + str;
  }
  return str;
}

decimalToBinary(45);
// output 101101
