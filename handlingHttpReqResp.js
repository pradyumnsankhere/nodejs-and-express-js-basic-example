const  http=require('http')
 
const server =http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/plain'})

    if(req.url==='/hello'){
        resp.end('Hello world')
    }
    else{
        resp.writeHead(404, {'Content-Type': 'text/plain'});
        resp.end('404 Not Found');
    }
})

server.listen(2000, () => {
    console.log("Listening on port 2000");
  });
  


