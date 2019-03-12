var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Prototype - means to introduce members
 * Annotation / Policy
 * Decorator - enhance the application.
 * Reflection APIs
 */
function ClassDecorator(constructor) {
    constructor.prototype.indian = true;
}
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person = __decorate([
        ClassDecorator
    ], Person);
    return Person;
}());
var p = new Person(100, "Roger");
console.log(p); //node out/third.js
console.log(p.getName(), p['indian']);
console.log(p.getName());
//# sourceMappingURL=third.js.map