const objArray: any[] = [];

// const objArray = [
//   { id: 1, title: "Car" },
//   { id: 2, title: "scooter" },
//   { id: 3, title: "Bike" },
//   { id: 4, title: "Truck" },
//   { id: 5, title: "Bus" },
//   { id: 6, title: "Train" },
//   { id: 7, title: "Ship" },
// ];

// type Push = (object: any) => Object;

// async function addPost(params: any) {
//   objArray.push(params);
//   return objArray;
// }

// const getPosts = (push: Push, object: any): any => {
//   return push(object);
// };

// const getAllData = getPosts(addPost, { id: 8, title: "Flight" });



function getPosts() {
  objArray.forEach((element) => {
    console.log(element);
  });
}

function addPost(post: { id: number; title: string }, callback: () => void) {
  objArray.push(post);
  callback();
}

addPost({ id: 9, title: "flight"}, getPosts);
