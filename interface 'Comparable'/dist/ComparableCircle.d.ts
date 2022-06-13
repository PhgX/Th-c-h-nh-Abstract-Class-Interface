import { Circle } from "./Circle";
import { Comparable } from "./Comparable";
export declare class ComparableCircle extends Circle implements Comparable {
    constructor(radius: number);
    compareTo(o: ComparableCircle): number;
}
