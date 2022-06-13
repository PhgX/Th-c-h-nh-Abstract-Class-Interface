import { Animal } from "./Animal";

export class Chicken extends Animal {
    makeSound() {
        return "Chicken: o` o' o ";
    }

    howToEat() {
        return "Could be fried";
    }
}