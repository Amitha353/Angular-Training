/**
 * Prototype - means to introduce members
 * Annotation / Retention Policy
 * Decorator - enhance the application.
 * Reflection APIs
 */
function ClassDecorator(constructor: Function) {
    constructor.prototype.indian = true;
}

@ClassDecorator
class Person {
    id: number;
    name: string;
    constructor(id:number, name: string) {
        this.id = id;
        this.name = name;
    }

    getName() : string {
        return this.name;
    }
}

let p: Person = new Person(100, "Roger");
console.log(p); //node out/third.js

console.log(p.getName(), p['indian']);
console.log(p.getName());