import promptSync from "prompt-sync";

const prompt = promptSync();

async function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

async function pointCaluculations(userInput: number) {
  const randomNumber = await getRandomNumber(6);

  if (userInput > 0) {
    if (userInput === randomNumber) {
      return 2;
    } else if (
      userInput - randomNumber === 1 ||
      userInput - randomNumber === -1
    ) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return 3;
  }
}

async function enterValue() {
  const userInput = prompt("Enter the number : ");
  const promiseGame = new Promise(async (resolve, reject) => {
    const response = await pointCaluculations(parseInt(userInput));

    if (response === 2) {
      resolve("You win 2 pints !!");
    } else if (response === 1) {
      resolve("You win 1 pints !!");
    } else if (response === 0) {
      resolve("You win 0 pints !!");
    } else {
      reject();
    }
  });
  return promiseGame;
}
function countinue(yesOrNo: string) {
  if (yesOrNo === "") {
    yesOrNo = prompt("Do you need to continue? : (Y/N)");
  }

  if (yesOrNo === "Y") {
    enterValue()
      .then((value) => {
        console.log(value);
        countinue("");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log("Finished , Thanks !!");
  }
}
countinue("Y");

// enterValue()
//       .then((value) => {
//         console.log(value);
//         countinue('y');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
