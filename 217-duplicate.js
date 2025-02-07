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
