const objArrays = [
  { id: 1, title: "Car" },
  { id: 2, title: "scooter" },
  { id: 3, title: "Bike" },
  { id: 4, title: "Truck" },
  { id: 5, title: "Bus" },
  { id: 6, title: "Train" },
  { id: 7, title: "Ship" },
];

function getPosts() {
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

  promiss.then(getPosts) .catch((error) => {
    console.log("Rejected:", error);
  })
 
}

addPosts({ id: 9, title: "flight" });

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
