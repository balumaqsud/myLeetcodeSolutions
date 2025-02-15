//1480. Running Sum of 1d Array
var runningSum = function (nums) {
  let res = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res.push(sum);
  }
  return res;
};

//second approach
for (let i = 1; i < nums.length; i++) {
  nums[i] = nums[i - 1] + nums[i];
}
return nums;

// or
for (let i = 1; i < nums.length; i++) {
  nums[i] += nums[i - 1];
}
return nums;
