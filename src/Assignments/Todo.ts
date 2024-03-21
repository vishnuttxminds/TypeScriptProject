
import promptSync from "prompt-sync";
const prompt = promptSync();

const objectArray = [
  { id: 1, title: "Car" },
  { id: 2, title: "scooter" },
  { id: 3, title: "Bike" },
  { id: 4, title: "Truck" },
  { id: 5, title: "Bus" },
  { id: 6, title: "Train" },
  { id: 7, title: "Ship" },
];

let oldSize = objectArray.length;

const largestId = objectArray.reduce((prev, current) => {
  return prev.id > current.id ? prev : current;
}).id;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise done 10000 : ");
  }, 10000);
});

const listArray = async () => {
  objectArray.forEach((element) => {
    console.log(element);
  });
  functionContinue();
};

const checkTheIdAvailability = async (index: number) => {
  return (index = objectArray.findIndex((item) => item.id === index));
};

const deleteFromArray = async () => {
  let currentSize = objectArray.length;

  let id = prompt("Enter a 'id' to remove the item:");

  let itemId = await checkTheIdAvailability(parseInt(id));

  const promise = new Promise<void>(function (resolve, reject) {
    if (itemId !== -1) {
      objectArray.splice(itemId, 1);
    } else {
      reject("There is no id found in the list :");
    }
    if (objectArray.length < currentSize) {
      resolve();
    } else {
      reject("Delete item is not success");
    }
  });

  return promise;
};

const updateIteamOfArray = async () => {
  let id = prompt("Enter a 'id' to update the title:");

  let itemId = await checkTheIdAvailability(parseInt(id));

  const promise = new Promise<void>(function (resolve, reject) {
    if (itemId !== -1) {
      let title = prompt("Enter title: ");
      objectArray[itemId].title = title;
      resolve();
    } else {
      reject("There is no id found in the list :");
    }
  });

  return promise;
};

const doYouCountinue = async () => {
  let yesOrNo = prompt("Do you need to continue? : (Y/N)");

  const promise = new Promise<void>((resolve, reject) => {
    if (yesOrNo === ("Y" || "y")) {
      resolve();
    } else {
      reject();
    }
  });

  return promise;
};

const arrayInsertion = async () => {
  const userInput = prompt("ARRAY INSERT: Enter a vehicle name: ");
  inserIntoArray({ id: largestId + 1, title: userInput })
    .then(() => {
      console.log("Array insertion has completed");
      listArray();
    })
    .catch(() => {
      console.log("Array insertion has failed");
    });
};

function inserIntoArray(item: { id: number; title: string }) {
  const promise = new Promise<void>(function (resolve, reject) {
    objectArray.push(item);
    if (objectArray.length > oldSize) {
      resolve();
    } else {
      reject();
    }
  });
  return promise;
}

const functionContinue = () => {
  doYouCountinue()
    .then((val) => {
      console.log(val);
      createTask();
    })
    .catch((error) => {
      console.log(error);
    });
};

const createTask = () => {
  const userInput = prompt(
    "Please select, 1)LIST ARRAY 2)INSERT ARRAY, 3)UPDATE ARRAY, 4)DELETE ARRAY : "
  );
  if (userInput === "1") {
    listArray();
  } else if (userInput === "2") {
    arrayInsertion();
  } else if (userInput === "3") {
    updateIteamOfArray()
      .then(() => {
        listArray();
      })
      .catch((error) => {
        console.log(error);
        functionContinue();
      });
  } else if (userInput === "4") {
    deleteFromArray()
      .then(() => {
        listArray();
      })
      .catch((error) => {
        console.log(error);
        functionContinue();
      });
  } else {
    console.log("Invalied input: Select 1 or 2 or 3 ");
    functionContinue();
  }
};

createTask();
