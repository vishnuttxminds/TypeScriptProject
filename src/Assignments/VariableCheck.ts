let data1 = "Hello ";
let data2 = "";
let data3 = "";
let data4 = undefined;
let data5 = null;

const checkVariable = (value: any) => {
  if (value === undefined || value === null || value === '') {
    return false;
  }
  return true;
};

console.log('====================================');
console.log(checkVariable(data5));
console.log('====================================');