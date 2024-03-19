const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

type Operator = (a: number, b: number) => number;

const operator = (operator: Operator, a: number, b: number): number => {
  return operator(a, b);
};

const sum: number = operator(add, 1, 3); 
const difference: number = operator(subtract, 3, 1);

console.log(`sum is ${sum}`);
console.log(`difference is ${difference}`);

HelloNode(Goodbye, 1, 3);

function HelloNode(goodbye: any, a: number, b: number) {
  let result = a + b;
  goodbye(result);
}






type Maths = (a: number, b: number) => number;

const plus = (a: number, b: number): number => {
  return a + b;
};

const response = (math: Maths, a: number, b: number): number => {
  return math(a, b);
};



function Goodbye(result: string) {
  console.log(result);
}

function displayLog() {
  const retpon: number = response(plus, 5, 1);
  console.log('====================================');
  console.log(retpon);
  console.log('====================================');
}

displayLog();