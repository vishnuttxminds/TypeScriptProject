import * as fs from "fs";
import * as path from "path";

function deleteFilesInDirectory(directoryPath: string): void {
  // Check if the directory exists
  fs.access(directoryPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Directory does not exist: ${directoryPath}`);
      return;
    }

    // Read the contents of the directory
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
      }

      // Iterate over each file in the directory
      files.forEach((file) => {
        const filePath = path.join(directoryPath, file);

        // Check if it's a file
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.error(`Error getting file stats: ${err}`);
            return;
          }

          if (stats.isFile()) {
            // Delete the file
            fs.unlink(filePath, (err) => {
              if (err) {
                console.error(`Error deleting file: ${filePath}`);
              } else {
                console.log(`Deleted file: ${filePath}`);
              }
            });
          }
        });
      });
    });
  });
}
const directoryPath =
  "\\nodeSample\\TypeScriptProject\\src\\nodeAssignment\\deleteFiles";

deleteFilesInDirectory(directoryPath);
