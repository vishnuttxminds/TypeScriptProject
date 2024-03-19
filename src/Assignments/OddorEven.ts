// const numValues: number[] = [1, 30, 5, 66];

// function getNumbers() {
//   numValues.forEach((element) => {
//     if (element % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return false;
// }

// function addNumbers(post: number[], callback: () => void) {

//   callback();
// }

// addNumbers(numValues, getNumbers);

// console.log(addNumbers(numValues, getNumbers));


// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const myNumbers: number[] = [1, 30, 5, 66];

const checkOddorEven = (number : number) => {
  return number % 2 === 0 ;
};


function addNumbers(numbers: number[], callback: { (number: number): boolean; (arg0: any): any; }) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }

  return myArray;
}
console.log(addNumbers(myNumbers,checkOddorEven));