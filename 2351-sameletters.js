//maping elements of s, seeing if we have seen it before, seen return it, else see more
var repeatedCharacter = function (s) {
  const memory = {};
  for (let i = 0; i < s.length; i++) {
    if (memory[s[i]] === undefined) {
      memory[s[i]] = s[i];
    } else {
      return s[i];
    }
  }
  console.log(memory);
  return false;
};
