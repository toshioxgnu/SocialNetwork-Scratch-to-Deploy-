const sum = require('./sum');

const http  = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World from js');
})

server.listen(3000);
const total = sum.sum(410,250);
console.log("Total: ",total);