var http = require('http');

http.createServer((req,res)=>{
    res.write('Hello world');
    res.end()
    console.log('Server Running....');
}).listen(8080);