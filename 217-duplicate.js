var containsDuplicate = function (nums) {
  //looping though nums and check if we see it before in the memory,
  //we see it, return true
  //else return false
  const memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = "hiiii";
    } else {
      return true;
    }
  }
  return false;
};

/// new method -> sort() and check if first and second elements are the same
//[ 1, 1, 2, 3 ]
nums.sort((a, b) => {
  return b - a;
}); //[3, 2, 1, 1]
for (let i = 0; i < nums.length; i++) {
  if (i > 0 && nums[i - 1] === nums[i]) {
    return true;
  }
}
return false;
