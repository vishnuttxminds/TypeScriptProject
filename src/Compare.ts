let obj1 = {
  name: "John",
  age: 23,
  degree: "CS",
};

let obj2 = {
  age: 23,
  degree: "CS",
};

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log("Same object");
} else {
  console.log("Differnt object");
}
