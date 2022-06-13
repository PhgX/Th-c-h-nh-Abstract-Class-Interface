import { Edible } from "./Edible";

export abstract class Fruits implements Edible {
  abstract howToEat(): string;  
}