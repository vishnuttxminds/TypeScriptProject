const personData = {
  namePerson: "John Doe",
  persionAge: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const { namePerson, persionAge, address: {city , country} } = personData;


console.log(namePerson);
console.log(persionAge);
console.log(city);
console.log(country);


