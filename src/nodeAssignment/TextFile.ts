import * as http from 'http';
import * as fs from 'fs';


const server = http.createServer((request, response) => {
    // Set the content type to text/plain
    response.setHeader('Content-Type', 'text/plain');

    // Read the content of the text file using a readable stream
    const readStream = fs.createReadStream('Text.txt');

    // Pipe the content of the file to the response stream
    readStream.pipe(response);

    // Handle errors
    readStream.on('error', (err) => {
        console.error(`Error reading file: ${err}`);
        response.statusCode = 500;
        response.end('Internal Server Error');
    });
});


server.listen(3000, () => {
    console.log(`Server is running on http://localhost:`);
});

console.log(server);
