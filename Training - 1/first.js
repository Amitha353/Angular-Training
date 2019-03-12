/**
 * https://shrib.com -> sharing notes
 * Higher Order Function - Javascript -> function sent as a parameter
 * Map -> Transforms Data
 * Filter -> filters, returns a predicate function (true/false);
 * Reduce -> Aggregates Data
 * forEach -> Traverse
 * 
 * OOP - has methods - tightly coupled programming 
 */

var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];

function forEach(data, action) {
    for(var i =0; i < data.length; i++) {
        action(data[i]);
    }
}

// forEach(products, console.log);
// forEach(products, alert);

function filter(data, predicate) {
    var result = [];
    forEach(data, function(elem) {
        if(predicate(elem)){
        result.push(predicate(elem));}
    })
    return result;
}

console.log("-------------------");
var filtered = filter(products, function(e) {if(e.category == "mobile") {return e.name};});

forEach(filtered, console.log);

function map(data,mapperFn) {
    var result = [];
    forEach(data, function(elem) {
        result.push(mapperFn(elem));
    })
    return result;
}


console.log("-------------------");
var mapped = map(products, function(e) {return e.name});
forEach(mapped, console.log);


console.log("-------------------");
var res = products.filter((e) => {return e.category === "mobile"}).map((e) => {return e.name;});
console.log(res);

console.log("-------------------");
var res2 = products.filter((e) => e.category === "mobile").map((e) => e.name);
console.log(res2);