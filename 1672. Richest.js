//1672. Richest Customer Wealth

var maximumWealth = function (accounts) {
  let rich = 0;
  for (let i = 0; i < accounts.length; i++) {
    let res = accounts[i].reduce((a, b) => a + b, 0);
    if (res > rich) {
      rich = res;
    }
  }
  return rich;
};
