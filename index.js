
const http = require('http');
var robot = require("robotjs");
http.createServer(function (req, res) {

    /**
     * remove first '/' 
     */
    const char_input = req.url.substring(1,2);
    console.log(char_input);
    if(char_input != ""){
        robot.keyTap(char_input);
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(char_input);
    
}).listen(8888, 'localhost');
