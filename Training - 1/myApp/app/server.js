var http = require('http');
var fs = require('fs');
var url = require('url');
var rgbToHex = require('./converter').rgbToHex;
var hexToRgb = require('./converter').hexToRgb;

// http://localhost:3000/rgbtohex?r=255&g=100&b=120
// http://localhost:3000/hextorgb?hex=ff00ff

var server = http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;// true -> tokenization [r=255, g=100, b=120]
    if(pathname.substring(1) === 'rgbtohex') {
        res.end(rgbToHex(parseInt(query.r), parseInt(query.g), parseInt(query.b)));
    } else if(pathname.substring(1) === 'hextorgb'){
        res.write(hexToRgb(query.hex).toString());
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server started [http://localhost:3000]");
});