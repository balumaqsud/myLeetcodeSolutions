//I shoud work with strings more!
var clearDigits = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char <= 9) {
      res.pop();
      continue;
    }
    res.push(char);
  }
  return res.join("");
};
