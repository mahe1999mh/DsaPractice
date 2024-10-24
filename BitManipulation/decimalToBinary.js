function decimalToBinary(n) {
  let str = "";

  while (n >= 1) {
    let x = Math.floor(n % 2);
    n = n / 2;
    str = x + str;
  }
  return str;
}

function binaryToDecimal(str) {
  let num = 0;
  let power = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == "1") {
      num += Math.pow(2, power);
    }
    power++;
  }
  return num;
}

let str = decimalToBinary(45);
// output 101101
console.log(binaryToDecimal(str));
// output 45
