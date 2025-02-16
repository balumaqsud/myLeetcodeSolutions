var fizzBuzz = function (n) {
  let list = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      list.push("FizzBuzz");
    } else if (i % 3 === 0) {
      list.push("Fizz");
    } else if (i % 5 === 0) {
      list.push("Buzz");
    } else {
      list.push(i.toString());
    }
  }
  return list;
};

// second approach;
var fizzBuzz = function (n) {
  let list = [];
  for (let i = 1; i <= n; i++) {
    let currStr = "";
    if (i % 3 === 0) {
      currStr += "Fizz";
    }
    if (i % 5 === 0) {
      currStr += "Buzz";
    }
    if (currStr == "") {
      currStr += i.toString();
    }
    list.push(currStr);
  }
  return list;
};
