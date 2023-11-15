const app = require("./demo");
var url = require("url");
const fs = require("fs");
console.log("Hello World");
console.log(app);
console.log(app.x);

const http = require("http");

http.createServer((req,resp)=>{
resp.write('Hello node ')
resp.end()
}).listen(4000)

const data = [
  { name: "aaaa", email: "qw@gmail.com" },
  { name: "bbb", email: "qwerw@gmail.com" },
];

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);

//Reading the file

http
  .createServer((req, res) => {
    fs.readFile("demo.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(5000);

// creating the file
  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

//writting the file 
fs.writeFile('mynewfile1.txt', 'AAAAAAAA', function (e) {
    if (e) throw e;
    console.log('Saved!');
  });

