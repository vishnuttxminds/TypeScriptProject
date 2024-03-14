// 2.Create a function that will accept any number of integer argument and will return their sum.
// (rest operator)

var numList = [{ num: 5 }, { num: 2 }, { num: 3 }, { num: 10 }];

// const totalSum = numList.reduce(function (accumulator, numList) {
//   return accumulator + numList.num;
// }, 0);

const sumOfNumbers = (...value: number[]) => {
  return value.reduce((accumulator, num) => {
    return accumulator + num;
  }, 0);
};


console.log("=============Total Sum==============");
console.log(sumOfNumbers(1, 2, 3, 4, 5));
console.log(sumOfNumbers(1, 2));
console.log(sumOfNumbers(1, 2, 3, 4));
console.log("====================================");
