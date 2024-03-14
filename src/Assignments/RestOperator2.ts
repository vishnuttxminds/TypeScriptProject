// 2.Create a function that will accept any number of integer argument and will return their sum.
// (rest operator)

var numList = [{ num: 5 }, { num: 2 }, { num: 3 }, { num: 10 }];

const totalSum = numList.reduce(function (accumulator, numList) {
  return accumulator + numList.num;
}, 0);

console.log("=============Total Sum==============");
console.log(totalSum);
console.log("====================================");
