const person = {
    Name: "Johny",
    Age: 40,
    Cars: [
      {
        name: "ford",
        models: ["mustang", "Fiesta", "Mustang"]
      },
      {
        name: "BMW",
        models: [320, "x3", "x5"]
      },
      {
        name: "fiat",
        models: [500, "panda"]
      }
    ]
  };


  console.log('Cars > ' , person.Cars);

  person.Cars.forEach(element => {
    console.log('Models > ', element.models);
  });


  
  