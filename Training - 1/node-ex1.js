/**
 * NodeJS - recommended for REAL time applications
 * Nodejs up till 8 is compatible with V8 engine;
 * Latest Nodejs 10 is compatible with many engines - Spider monkey, etc.
 * Nodejs - excellent for Non-blocking API, since a single thread is active in pushing data into the queue.
 * High CPU intesnse operation - blocking operation and not recommended to work with NodeJs
 * DB related and File related operations are non-blocking and can be used with "NodeJS".
 * Netflix / Amazon Prime / data streaming apps - recommended to be operated with Nodejs - Non-blocking APIs.
 * For CPU intensive operation - multithreaded architecture.
 *  Example : A docker container with 4 threads and many such systems.
 */

 // 1. Event Loop is blocked - synchronous operation
var fs = require('fs');
var content = fs.readFileSync("ES2015.js");//synchronous operation
console.log(content.toString());

console.log("                      ");

// 2. Callback based - Event loop takes place, but thread is blocked. (until the error is resolved.)

console.log("Callback based Operation");
var content2 = "";
fs.readFile("ES2015.js", function(err, data) {  //asynchronus operation
    if(!err) {
        content2 = data;
        console.log("INSIDE: " + content2.toString());
        console.log("                      ");
    }
});

console.log("OUTSIDE: " + content2.toString());

console.log("                      ");

// 3. NON-BLOCKING API - Event Based (data) | Not Callback based -> NETFLIX | AMAZON PRIME
var content3 = "";
var stream = fs.createReadStream("ES2015.js"); //file thread
// var stream = fs.createReadStream("ES201500.js"); 
stream.on("data", function(chunk) {  // event data generated 
    console.log("                      ");
    console.log(chunk.toString());
});

stream.on("end", function() { // event done
    console.log("DONE!!!");
});

stream.on("error", function(e){
    console.log("PROBLEM!!! ", e);
});

console.log("                      ");