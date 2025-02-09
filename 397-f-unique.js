// this one is hard,
// var firstUniqChar = function (s) {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]] === undefined) {
//       map.set(s[i], (map.get(s[i]) || 0) + 1);
//     }
//   }
//   let inx = 0;
//   for (let [key, occur] of map) {
//     if (occur === 1) {
//       return inx;
//     }
//     inx++;
//   }
//   return -1;
// };
