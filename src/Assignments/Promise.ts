// ======================promis array insertion=========================

const objArrays = [
  { id: 1, title: "Car" },
  { id: 2, title: "scooter" },
  { id: 3, title: "Bike" },
  { id: 4, title: "Truck" },
  { id: 5, title: "Bus" },
  { id: 6, title: "Train" },
  { id: 7, title: "Ship" },
];

function getPostData() {
  objArrays.forEach((element) => {
    console.log(element);
  });
}

let oldSize = objArrays.length;

function addPosts(item: { id: number; title: string }) {
  const promiss = new Promise<any>(function (resolve, reject) {
    objArrays.push(item);

    if (objArrays.length > oldSize) {
      resolve("The push is successfull");
    } else {
      reject("The push is failed");
    }
  });

  //   promiss.then(getPostData).catch((error) => {
  //     console.log("Rejected:", error);
  //   });

  return promiss;
}

// addPosts({ id: 9, title: "flight" }).then(getPostData).catch((error) => {
//     console.log("Rejected:", error);
//   });

// ================promis odd or even=============================

// const myNumberList: number[] = [1, 30, 5, 66];
const myNumberList: number[] = [];

const setOddorEven = (number: number) => {
  return number % 2 === 0;
};

function setNumbers(numbers: number[]) {
  const promissed = new Promise<any>(function (resolve, reject) {
    const listArray = [];

    if (numbers.length > 0) {
      for (const x of numbers) {
        if (setOddorEven(x)) {
          listArray.push(x);
        }
      }
      resolve(listArray);
    } else {
      reject("Failed for data fetch");
    }
  });

  return promissed;
}

setNumbers(myNumberList)
  .then((listData) => {
    console.log(listData);
  })
  .catch((error) => {
    console.log(error);
  });

///===============================================================================//

//   const addItem= (item: { id: number; title: string; }): any => {
//     objArrays.push(item);
//     return objArrays;
//  };

//  const value: any = addItem({ id: 9, title: "flight"});

//  const numberPromise = Promise.resolve(value);

//  numberPromise.then ((value) => {
//     console.log ('Resloved:', value );
//     return `${value}`;
//  }).catch ((error ) => {
//     console.log ('Rejected:', error );
//  })
