let username = "Thoma";
// console.log(username);

let q = 1;
let b = 3;
let c = 10;
// console.log(q + c);

let registerNumber: string | number;

registerNumber = "constrdsc57dhak";
registerNumber = 3;

let stringArrNumber = ["one", "two", 3];
let stringArrFruits = ["Apple", "Orange", "Grape", "kivi"];

stringArrNumber[0] = "five";
stringArrNumber.push("four");

stringArrFruits.unshift("Jim");

let test = [];
let band: string[] = [];
band.push("Helo");

let mutipleArray: [string, number, boolean] = ["Thoms", 980, true];

//array postion
mutipleArray[2] = false;

//object

let sampleObject: Object;

sampleObject = [];

sampleObject = band;

sampleObject = {};

const exampleObj = {
  obj1: "raju",
  obj2: 1,
};

exampleObj.obj1 = "samsung";

// ? name is optional property
type Football = {
  name?: string;
  jersyNo: number;
  team: (string | number)[];
};

let messiStat: Football = {
  name: "Messi",
  jersyNo: 10,
  team: ["Argentina", "Since 2006"],
};
messiStat.team.push("Barcelona");

let ronoStat: Football = {
  jersyNo: 7,
  team: ["Protugal", "Since 2004"],
};
ronoStat.team.push("Real Madrid");

const footballPlayer = (player: Football) => {
  if (player.name === undefined) {
    player.name = "Ronaldo";
  }

  return `This is ${player.name} from ${player.team}`;
};

// console.log(footballPlayer(messiStat));
// console.log(footballPlayer(ronoStat));

let arrOne = [32, 45, 63, 36, 24, 11];
const multFive = (num: number) => {
  return num * 5;
};
let arrTwo = arrOne.map(multFive);

// console.log('Map > ' + arrTwo)

let arrNum = [15, 39, 20, 32, 30, 45, 22];
function divByThree(num: number) {
  return num % 2 == 0;
}
let arrNewNum = arrNum.filter(divByThree);
// console.log('filter >' + arrNewNum)

var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

var officersIds: string[] = [];

officers.forEach(function (officer) {
  officersIds.push(officer.name);
});

var totalYears = officers.reduce(function (accumulator, officers) {
  return accumulator + officers.id;
}, 0);

//   console.log(totalYears);

var authors = ["Mikel", "Brad", "Jessy", "Pof", "MArting"];
var result = authors.reduce((prev, curr) => prev + " || " + curr);

type item = {
  name?: string;
  a?: number;
  b?: number;
};
const arryObj: item[] = [
  { a: 1 },
  { name: "Jane" },
  {},
  { b: 2 },
  { name: "Smith" },
  { name: "Fatima" },
];

const namesArray = arryObj.reduce((accumulator: string[], currentItem: any) => {
  if (currentItem?.name) {
    accumulator.push(currentItem.name);
  }
  return accumulator;
}, []);

console.log("Name : ", namesArray);

console.log("============== Out Puts ======================");
console.log(stringArrNumber);

console.log(stringArrFruits);

console.log(band);

console.log(mutipleArray);
console.log("==============================================");
