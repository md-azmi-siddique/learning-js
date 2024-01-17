const http = require('http');

http.createServer((req, res)=>{
    res.write('hello from server');
    res.end()
}).listen(8080)

