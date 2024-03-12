const person = {
  Name: "Johny",
  Age: 40,
  Cars: [
    {
      name: "ford",
      models: ["mustang", "Fiesta", "Mustang"],
    },
    {
      name: "BMW",
      models: [320, "x3", "x5"],
    },
    {
      name: "fiat",
      models: [500, "panda"],
    },
  ],
};

console.log("Name > ", person.Name);
console.log("Age > ", person.Age);

console.log("Cars > ", person.Cars);

person.Cars.forEach((element) => {
  console.log("Cars Name > ", element.name);
  element.models.forEach((models) => {
    console.log("Cars Model Name > ", models);
  });
});
