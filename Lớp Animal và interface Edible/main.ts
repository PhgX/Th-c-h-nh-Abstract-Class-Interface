import { Apple } from "./Apple";
import { Chicken } from "./Chicken";
import { Orange } from "./Orange";
import { Tiger } from "./Tiger";

let animal = []

animal[0] = new Tiger();
animal[1] = new Chicken();

animal.forEach(item => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
});

console.log(`--------------------`)

let fruits = []

fruits[0] = new Orange();
fruits[1] = new Apple();

fruits.forEach(item => console.table(item.howToEat()));
