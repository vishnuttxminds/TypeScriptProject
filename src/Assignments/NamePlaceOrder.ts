import { forEach } from "lodash";

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function handleAsyncAwait() {
  const response = await fetch(API_URL);
  const data: any[] = await response.json();
  
  //   const names = data.map((item) => item.name);
  //   console.log(names);

  data.forEach((element) => {
    console.log(element.name);
  });
}
handleAsyncAwait().catch((error) => console.error("ERROR >> ", error));
