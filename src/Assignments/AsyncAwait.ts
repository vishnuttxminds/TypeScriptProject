import { reject } from "lodash";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise done 10000 : ");
  }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise done 5000 : ");
  }, 5000);
});

async function checkAsyncAwait() {
  console.log("Hello world");

  const promisCheck2 = await promise2;
  console.log("promisCheck 50 sec");
  console.log(promisCheck2);

  const promisCheck = await promise;
  console.log("promisCheck 10 sec");
  console.log(promisCheck);
}

// checkAsyncAwait();

const API_URL = "https://api.github.com/user/followers";

async function handleAsyncAwait() {
  const data = await fetch(API_URL);
  const jsonval = await data.json();
  console.log(jsonval);
}
handleAsyncAwait().catch((error) => console.error("ERROR >> ", error));
