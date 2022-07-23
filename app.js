const http = require('http');
const server = http.createServer((req, res) =>{
const url = req.url;
// const
if(url === '/'){
    res.write('<htlm>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action ="/message" method="POST"><input type="text" name = "message"><button type="submit"></button></form></body>');
    res.write('</htlm>');
    return res.end();
}
res.setHeader('Content-Type', 'text/html');
res.write('<htlm>');
res.write('<head><title>My first page</title><head>');
res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
res.write('</htlm>');
res.end();

});

server.listen(3000);