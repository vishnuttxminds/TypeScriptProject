const personDetails = {
  namePerson: "John Doe",
  persionAge: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const printPerson = ({
  namePerson,
  persionAge,
}: {
  namePerson: string;
  persionAge: number;
}) => {
  console.log(namePerson);
  console.log(persionAge);
};

printPerson(personDetails);
