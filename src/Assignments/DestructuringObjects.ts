
let numbers = [10, 20, 30, 40, 50];

let first, second, third;

[first, second, third] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);

// let user = {
//   names: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
// };

// const { names, address } = user;

// console.log(address);

const [firstName, lastName, website] = [
    "Oluwatobi",
    "Sofela",
    "codesweetly.com"
  ];

  firstName

// let firstName, lastName, website;
// [firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"];

// const [firstName, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com", "this", "that", "what"];

//   console.log(firstName);
//   console.log(otherInfo);
//   console.log(lastName);
//   console.log(website);

// const profile = ["Thomas", "Chako"];
// const getUserBio = ([firstName, lastName]: string[]) => {
//   return `My name is ${firstName} ${lastName}.`;
// };
// console.log(getUserBio(profile));

// const profile = {
//     lastName: { familyName: "Sofela" }
//   };
//   const  {lastName : {familyName : famName}} = profile
//   console.log(famName);

// const getUser = () => {
//   return {
//     fullName: "Thoma",
//     address: "Thottathulli",
//     age: 43,
//   };
// };

// const { fullName, address } = getUser();

// console.log(fullName);
// console.log(address);


// const users = [
//     { 
//         'fullName': 'Alex',
//         'address': '15th Park Avenue',
//         'age': 43
//     },
//     { 
//         'fullName': 'Bob',
//         'address': 'Canada',
//         'age': 53
//     },
//     { 
//         'fullName': 'Carl',
//         'address': 'Bangalore',
//         'age': 26
//     }
// ];

// for(let { fullName, age } of users) {
//     console.log(`${fullName} is ${age} years old!`);
// }

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

const updated = {
    ...user, 
    department: {'number': 7}
}

// console.log(updated);


const userDetails = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const department = {
    'id': '001',
    'Shift': 'Morning'
}

const completeDetails = {...userDetails, ...department};

// console.log(completeDetails);

const {age, ...rest} = user;
// console.log(age, rest);

const updatedUser = {...userDetails, salary:12345};

console.log(updatedUser);



