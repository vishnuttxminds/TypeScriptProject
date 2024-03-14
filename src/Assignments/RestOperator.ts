
// 1.Concatenate the following arrays into one [1, 2], [3, 4], [5, 6] using rest operator.

const firstArr : number[]  =[1, 2]

const secondArr : number[]  =[3, 4]

const thirdArr : number[]  =[5, 6]

const completeArr = [...firstArr, ...secondArr, ...thirdArr];

console.log('====================================');
console.log(completeArr);
console.log('====================================');