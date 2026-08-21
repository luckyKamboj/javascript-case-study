let value = 3;
let value2 = "4";
// console.log(value == value2); // false
// console.log(value != value2); // true
// console.log(value < value2); // true
// console.log(value > value2); // false
// console.log(value <= value2); // true
// console.log(value >= value2); // false


/** 
 * == and relational operators (>, >=) use different coercion rules.
 * With ==, JavaScript does type coercion, but 0 and null are a special case. 
 * null is only loosely equal to undefined
 * null is treated specially by ==, but gets converted to 0 for numeric relational comparisons.
*/
value = 0;
value2 = null;
console.log(value == value2); // false  
console.log(value === value2); // false  
console.log(value > value2); // false
console.log(value >= value2); // true
