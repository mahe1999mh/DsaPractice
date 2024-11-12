// Input: s = "XYYX", k = 2

function characterReplacement(s, k) {
  let count = new Map();
  let res = 0;
  let l = 0,
    maxf = 0;
  for (let i = 0; i < s.length; i++) {
    count.set(s[i], (count.get(s[r]) || 0) + 1);
    maxf = Math.max(maxf, count.get(s[i]));

    while (i - l + 1 - maxf > k) {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
}
