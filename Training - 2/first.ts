//tsc -v
// function add(x: number, y: number): number {
//     return x + y;
// }

import add from './second';

console.log(add(3, 4));
// console.log(add("A", "B")); //error exists until compile stage, thereafter javascript - data type - loosely bound.

interface Book {
    id: number,
    title: string,
    price?: number //optional
};

function addBook(book: Book) {
    console.log(book);
}

addBook({"id": 1, "title": "Angular CompleteReference"});
addBook({"id": 2, "title": "React CompleteReference", "price": 60});

/**
 * Interfaces in Java -> constants, abstract methods and no state.
 */