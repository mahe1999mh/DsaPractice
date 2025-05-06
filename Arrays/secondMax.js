function secondMax(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for(const num of arr){
    if(num > max){
      second = max;
      max = num;
    }else if(num < max && num > second){
      second = num;
    }
  }
  return second;
}
function secondMax(arr) {
return [...new Set(arr)].at(-2);
}


console.log(secondMax([10, 5, 8, 12, 12,20,]));
