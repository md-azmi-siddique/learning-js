const http = require('http');

http.createServer((req, res)=>{
    // res.write('hello from server');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end()
}).listen(8080)

