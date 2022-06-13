"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Apple_1 = require("./Apple");
const Chicken_1 = require("./Chicken");
const Orange_1 = require("./Orange");
const Tiger_1 = require("./Tiger");
let animal = [];
animal[0] = new Tiger_1.Tiger();
animal[1] = new Chicken_1.Chicken();
animal.forEach(item => {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howToEat());
    }
});
console.log(`--------------------`);
let fruits = [];
fruits[0] = new Orange_1.Orange();
fruits[1] = new Apple_1.Apple();
fruits.forEach(item => console.table(item.howToEat()));
//# sourceMappingURL=main.js.map