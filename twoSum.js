/**
2
• * @param {number []} nums
3 * @param {number} target
4 * @return {number[]}
*/
var twoSum = function (nums, target) {
  // using hashmap
  const numberToIndex = {};

  //loop through and add to hashmap
  for (let i = 0; i < nums.length; i++) {
    numberToIndex[nums[i]] = i;
  }

  // lets loop again
  for (let i = 0; i < nums.length; i++) {
    // target minus current number equals second needed number
    const neededNumber = target - nums[1];
    // if numberNeeded is not undefined and not current number,
    //meaning the same number is not being added
    if (
      numberToIndex[neededNumber] != undefined &&
      numberToIndex[neededNumber] != i
    ) {
      return [i, numberToIndex[neededNumber]];
    }
  }
};

//second way! but slower is using inner loop!
var twoSum2 = function (nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
// time complexity is slower
