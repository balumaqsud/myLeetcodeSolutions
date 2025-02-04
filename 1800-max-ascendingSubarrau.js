//1800. Maximum Ascending Subarray Sum
/*
Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
*/

var maxAscendingSum = function (nums) {
  // sum and current is the fist element at first
  let sum = nums[0];
  let curr = nums[0];
  //loop through array, if current element is bigger previos element-> add else current = to current
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      curr += nums[i];
    } else curr = nums[i];
    //just max out of these
    sum = Math.max(sum, curr);
  }
  return sum;
};
