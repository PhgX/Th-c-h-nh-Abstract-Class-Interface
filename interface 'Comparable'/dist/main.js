"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComparableCircle_1 = require("./ComparableCircle");
let circle1 = new ComparableCircle_1.ComparableCircle(12);
let circle2 = new ComparableCircle_1.ComparableCircle(22);
let circle3 = new ComparableCircle_1.ComparableCircle(42);
let circles = [];
circles[0] = circle1;
circles[1] = circle2;
circles[2] = circle3;
let result = circles[2].compareTo(circles[0]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
//# sourceMappingURL=main.js.map