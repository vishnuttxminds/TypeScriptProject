// Using  Node.js http module create a web server.

var http = require("http");

http
  .createServer((req: any, res: any) => {
    res.write(
      "<!DOCTYPE html><html><head><title>Logging Example</title></head><body>"
    );
    res.write("<h1>Hello Thoma!</h1>");
    res.write("<script>console.log('SERVER IS RUNNING');</script>");
    res.write("</body></html>");
    res.end();
  })
  .listen(8081, () => {
    console.log("Server is running in the port 8081");
  });
