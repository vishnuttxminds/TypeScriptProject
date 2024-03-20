import promptSync from "prompt-sync";

const prompt = promptSync();

async function pointCaluculations(userInput: number) {
  const calculationPromise = new Promise(async (resolve, reject) => {
    if (userInput > 0) {
      const randomNumber = Math.floor(Math.random() * 6);
      if (userInput === randomNumber) {
        resolve(2);
      } else if (
        userInput - randomNumber === 1 ||
        userInput - randomNumber === -1
      ) {
        resolve(1);
      } else {
        resolve(0);
      }
    } else {
      resolve(3);
    }
  });

  return calculationPromise;
}

async function enterValue() {
  const userInput = prompt("Enter the number : ");
  const enterPromise = new Promise(async (resolve, reject) => {
    pointCaluculations(parseInt(userInput))
      .then((response) => {
        if (response === 2) {
          resolve("You win 2 pints !!");
        } else if (response === 1) {
          resolve("You win 1 pints !!");
        } else if (response === 0) {
          resolve("You win 0 pints !!");
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject();
      });
  });
  return enterPromise;
}
function continueGame(yesOrNo: string) {
  if (yesOrNo === "") {
    yesOrNo = prompt("Do you need to continue? : (Y/N)");
  }

  if (yesOrNo === "Y") {
    enterValue()
      .then((value) => {
        console.log(value);
        continueGame("");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log("Finished , Thanks !!");
  }
}

continueGame("Y");

// enterValue()
//       .then((value) => {
//         console.log(value);
//         countinue('y');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
