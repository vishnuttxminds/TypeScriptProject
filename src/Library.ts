type Library = {
  title: string;
  author: string;
  alreadyread: boolean;
};

const libraryData: Library[] = [
  {
    title: "The India Story",
    author: "Bimal Jalal",
    alreadyread: false,
  },
  {
    title: "Grand Ma's bag of Stories",
    author: "Sudha Murthy",
    alreadyread: false,
  },
  {
    title: "Two States",
    author: "Chetan Bhagat",
    alreadyread: true,
  },
  {
    title: "Lal Salam",
    author: "Smriti Irani",
    alreadyread: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    alreadyread: false,
  },
];

libraryData.forEach((element) => {
  if (element?.alreadyread) {
    console.log(`You already read "${element.title}" by "${element.author}"`);
  } else {
    console.log(
      `You still need to read "${element.title}" by "${element.author}"`
    );
  }
});



