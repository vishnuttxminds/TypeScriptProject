import * as fs from "fs";
import path from "path";

const copyFile = (source: string, destination: string) => {
  // Create a readable stream from the source file
  const readStream = fs.createReadStream(source);

  // Create a writable stream to the destination file
  const writeStream = fs.createWriteStream(destination);

  // Pipe the content from the source file to the destination file
  readStream.pipe(writeStream);

  // Handle errors
  readStream.on("error", (err) => {
    console.error(`Error reading source file: ${err}`);
  });

  writeStream.on("error", (err) => {
    console.error(`Error writing to destination file: ${err}`);
  });

  // Log when copying is complete
  writeStream.on("finish", () => {
    console.log(`Successfully copied `);
  });
};


const sourceFile = path.join(__dirname, "deleteFiles", "First.ts");
const destinationFile = path.join(__dirname, "deleteFiles", "Second.ts");

copyFile(sourceFile, destinationFile);
