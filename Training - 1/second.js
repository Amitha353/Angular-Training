/**
 * Higher Order Functions, functions returning functions
 * Closures -> Concept is a concept is javascript, where a function as access to elements out of its scope.
 * Prototype scopes -> closures ,  global;
 * Inner function has access to members of outside -> Closure;
 * Global variables can be made local (private) with closures.
*/

function greeting(msg) {
    return function (name) {
        return msg + " " + name + " !!!";
    };
}

greeting("Good Morning")("Smith");

var morningGreet = greeting("Good Morning");
console.log(morningGreet("Smith"));
console.log(morningGreet("Peter"));

console.log("---------------------------------");