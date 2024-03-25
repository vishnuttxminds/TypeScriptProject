import * as http from 'http';
import * as fs from 'fs';

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    const readStream = fs.createReadStream('Text.txt');
    readStream.pipe(response);

    readStream.on('error', (err) => {
        console.error(`Error reading file: ${err}`);
        response.statusCode = 500;
        response.end('Internal Server Error');
    });
});

server.listen(3000, () => {
    console.log(`Server is running `);
});




