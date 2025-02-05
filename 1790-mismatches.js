var areAlmostEqual = function (s1, s2) {
  //if they are the same
  if (s1 === s2) return true;
  let mismatches = 0;
  let mismatch = [];
  //loop through both strings, see if char in the same pos is different!
  //if the are different, how many pairs are different, more than 2? -> false
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      mismatch.push(s1[i]);
      mismatch.push(s2[i]);
      mismatches++;
    }
    if (mismatches > 2) return false;
  }
  // 2 pairs and the are same chars to each other -> true
  if (
    mismatch.length === 4 &&
    mismatch[0] === mismatch[3] &&
    mismatch[1] === mismatch[2]
  ) {
    return true;
  } else return false;

  console.log(mismatches);
  console.log(mismatch);
};
