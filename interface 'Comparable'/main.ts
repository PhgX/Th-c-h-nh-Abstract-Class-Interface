// Sử dụng interface Comparable và triển khai phương thức compareTo() 
// để hỗ trợ so sánh “hơn, kém, bằng” các đối tượng của các lớp hình học

// import {ComparableCircle} from "./ComparableCircle"

// let result : number = circle[0].compareTo(circle[1]);
// console.log(result)

// // console.log(circle1.toString())
// // console.log(circle2.toString())
// // console.log(circle3.toString())

// if(result === 0){
//     console.log(` 2 hình tròn bằng nhau`)
// } else if(result === -1) {
//     console.log(`hình tròn hiện tại nhỏ hơn`)
// } else {
//     console.log(`hình tròn hiện tại lớn hơn`)
// }

import {ComparableCircle} from "./ComparableCircle";



let circle1 : ComparableCircle = new ComparableCircle (12);
let circle2 : ComparableCircle = new ComparableCircle (22);
let circle3 : ComparableCircle = new ComparableCircle (42);

let circles = [];
circles[0] = circle1;
circles[1] = circle2;
circles[2] = circle3;
let result = circles[2].compareTo(circles[0]);

if(result == 1){
    console.log("The current circle is larger.");
}else{
    console.log("The current circle is smaller.");
}