function reverse(arr, startIndex, endIndex) {
  let start = startIndex;
  let end = endIndex;

  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}
var rotate = function (arr, k) {
  k = k % arr.length;
  if (k === 0) return arr;
  // Reverse the entire array
  reverse(arr, 0, arr.length - 1);
  // Reverse the first k elements
  reverse(arr, 0, k - 1);
  // Reverse the remaining elements
  reverse(arr, k, arr.length - 1);

  return arr;
};

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
