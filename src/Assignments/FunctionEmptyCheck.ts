let objPerson = {
  name: "John",
  age: 23,
  degree: "CS",
};
let s ='sdf'
let objEmpty = {};

const checkFunctionData = (obj: Object) => {
  if (Object.keys(obj).length == 0) {
    return true;
  }
  return false;
};

console.log("Object Empty is", checkFunctionData(objPerson));
console.log("Object Empty is", checkFunctionData(objEmpty));
