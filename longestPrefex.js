// could not do it myself but copied
var longestCommonPrefix = function (strs) {
  let minLen = strs[0].length;
  for (let str of strs) {
    minLen = Math.min(minLen, str.length);
  }
  let res = [];

  for (let i = 0; i < minLen; i++) {
    let char = strs[0][i];

    for (let str of strs) {
      if (str[i] !== char) {
        return res.join("");
      }
    }
    res.push(char);
  }
  return res.join("");
};
