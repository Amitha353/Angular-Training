
/** Memorize Pattern */
function fibanocci(no) {
    return (no == 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no - 2);
}

console.time("First");
console.log(fibanocci(34));
console.timeEnd("First");

console.time("Second");
console.log(fibanocci(34));
console.timeEnd("Second");

console.log("---------------------");

/** Closure -> used to implement memorize pattern using Closure concept*/

function memorize(fn) {
    var cache = [];
    return function (args) {
        if (cache[args]) {
            return cache[args];
        } else {
            return cache[args] = fn(args);
        }
    };
}

var memFib = memorize(fibanocci);
console.time("First");
console.log(memFib(34));
console.timeEnd("First");

console.time("Second");
console.log(memFib(34));
console.timeEnd("Second");


// function fibanocci(no) {
//     return (no== 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no - 2);
// }


// console.time("First");
//     console.log(fibanocci(34));
// console.timeEnd("First");

// console.time("Second");
//     console.log(fibanocci(34));
// console.timeEnd("Second");

// ------------------------


// function fibanocci(no) {
//     return (no== 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no - 2);
// }

// function memoize(fn) {
//     var cache = [];
//     return function(args) {
//         if(cache[args])  {
//             return cache[args];
//         } else {
//             return cache[args] = fn(args);
//         }
//     };
// }

// var memFib = memoize(fibanocci);

// console.time("First");
//     console.log(memFib(34));
// console.timeEnd("First");

// console.time("Second");
//     console.log(memFib(34));
// console.timeEnd("Second");