//3105. Longest Strictly Increasing or Strictly Decreasing Subarray

var longestMonotonicSubarray = function (nums) {
  let n = nums.length;
  let longest = 1;
  let strictly_increasing = 1;
  let strictly_decreasing = 1;
  //checking current abd current -1 element, if current element is bigger strictly_increasing++,else = 1
  //and vise versa
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) strictly_increasing++;
    else strictly_increasing = 1;

    if (nums[i] < nums[i - 1]) strictly_decreasing++;
    else strictly_decreasing = 1;

    longest = Math.max(longest, strictly_increasing, strictly_decreasing);
  }
  return longest;
};
