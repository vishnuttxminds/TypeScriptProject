import _ from "lodash";

const obj1 = {
  name: "John",
  age: 23,
  degree: "CS",
};

const obj2 = {
  age: 23,
  degree: "CS",
};

// isEqual Library used
if (_.isEqual(obj1, obj2)) {
  console.log("Same object");
} else {
  console.log("Differnt object");
}

//Shallow Comparison
const shallowEqual = (object1: any, object2: any) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

if (shallowEqual(obj1, obj2)) {
  console.log("Same object");
} else {
  console.log("Differnt object");
}
