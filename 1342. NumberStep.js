// 1342. Number of Steps to Reduce a Number to Zero

var numberOfSteps = function (num) {
  let times_count = 0;
  while (num != 0) {
    if (num % 2 === 0) {
      num = num / 2;
      times_count++;
    }
    if (num % 2 !== 0) {
      num = num - 1;
      times_count++;
    }
  }
  return times_count;
};
