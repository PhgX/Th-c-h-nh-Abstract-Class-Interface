"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chicken = void 0;
const Animal_1 = require("./Animal");
class Chicken extends Animal_1.Animal {
    makeSound() {
        return "Chicken: o` o' o ";
    }
    howToEat() {
        return "Could be fried";
    }
}
exports.Chicken = Chicken;
//# sourceMappingURL=Chicken.js.map