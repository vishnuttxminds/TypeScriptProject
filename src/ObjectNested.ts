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

const sample1 = {
  "ethnicity": {
      "value": "Gurung",
      "rank": 1
  },
  "occupation": {
      "value": "Banker",
      "rank": 2
  }
}

const sample2 ={
  "glossary": {
      "title": "example glossary",
  "GlossDiv": {
          "title": "S",
    "GlossList": {
              "GlossEntry": {
                  "ID": "SGML",
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "GlossDef": {
                      "para": "A meta-markup language, used to create markup languages such as DocBook.",
          "GlossSeeAlso": ["GML", "XML"]
                  },
        "GlossSee": "markup"
              }
          }
      }
  }
};

// console.log("Name > ", person.Name);
// console.log("Age > ", person.Age);

// console.log("Cars > ", person.Cars);

// person.Cars.forEach((element) => {
//   console.log("Cars Name > ", element.name);
//   element.models.forEach((models) => {
//     console.log("Cars Model Name > ", models);
//   });
// });


function iterateObject(obj: any, indent = 0) {
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
              console.log(`${" ".repeat(indent)}${key}:`);
              value.forEach((item: any) => {
                  if (typeof item === "object") {
                      iterateObject(item, indent + 4);
                  } else {
                      console.log(`${" ".repeat(indent + 4)}${item}`);
                  }
              });
          } else if (typeof value === "object") {
              console.log(`${" ".repeat(indent)}${key}:`);
              iterateObject(value, indent + 4);
          } else {
              console.log(`${" ".repeat(indent)}${key}: ${value}`);
          }
      }
  }
}

iterateObject(sample2)
