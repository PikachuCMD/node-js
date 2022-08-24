let http = require('http');
let dt = require('./myTime');
let url = require('url');
let fs = require('fs');
LET
/*
let adr = 'http://localhost:8081/default.html?year=2022&month=november';
let q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);


let qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);
*/



http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');

        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8081);





/*

fs.appendFile('mynewfile', 'hello words', function(err) {
    if (err) throw err;
    console.log('Saved');

})

fs.open('mynewfile2', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved');

})

fs.writeFile('mynewfile3', 'This is new File3', function(err) {
    if (err) throw err;
    console.log('Saved');

})

fs.appendFile('mynewfile3.txt', 'This is new File3:LFkakjvcxzvhjxv', function(err) {
    if (err) throw err;
    console.log('Saved');

})

fs.unlink('mynewfile3.txt', function(err) {
    if (err) throw err;
    console.log('File Deleted');

})


fs.rename('mynewfile3.txt', 'Trename.txt', function(err) {
    if (err) throw err;
    console.log('File Renames');

}) */