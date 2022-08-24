let http = require('http');
let dt = require('./myTime');
let url = require('url');
let fs = require('fs');
http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let q = url.parse(req.url, true).query;
        let txt = q.year + " " + q.month
        res.end(txt);
    }


).listen(8081);