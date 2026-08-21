let marks = "33abs";
console.log("when marks is string");
console.log(typeof marks); 
console.log(Number(marks)); // NaN
console.log(marks); 

let rank = null;
console.log("when rank is null");
console.log(typeof rank); 
console.log(Number(rank)); // 0
console.log(rank); 

let age;
console.log("when age is undefined");
console.log(typeof age); 
console.log(Number(age)); // NaN
console.log(age); 


let userStatus = 1;
console.log("when userStatus is number with value 1");
console.log(typeof userStatus);
console.log(Boolean(userStatus)); // true

userStatus = 0;
console.log("when userStatus is number with value 0");
console.log(typeof userStatus);
console.log(Boolean(userStatus)); // false

userStatus = -1;
console.log("when userStatus is number with value -1");
console.log(typeof userStatus);
console.log(Boolean(userStatus)); // true

userStatus = 4;
console.log("when userStatus is number with value 4");
console.log(typeof userStatus);
console.log(Boolean(userStatus)); // true

let userStatusString = "4";
console.log("when userStatus is string with value '4'");
console.log(typeof userStatusString);
console.log(Boolean(userStatusString)); // true

userStatusString = "";
console.log("when userStatus is string with value ''");
console.log(typeof userStatusString);
console.log(Boolean(userStatusString)); // false

let firstString = 'Hello';
let secondString = 'World';
console.log( firstString + " " + secondString); // Hello World

/*Case study
Precedence of + operator is left to right
    1. if one of the operand is string then it will convert other operand to string and concatenate
    2. if both operand are number then it will add them
    3. if both operand are string then it will concatenate them
    4. if operand is boolean then it will convert to number and add them
    5. if operand is null then it will convert to number and add them
    6. if operand is undefined then it will convert to number and add them
    7. if we have paranthesis then it will evaluate the expression inside the parenthesis first and then add them
*/
console.log(true + true); // 2
console.log(true + false); // 1
console.log(false + false); // 0
console.log(false + true); // 1
console.log(true + 1); // 2
console.log(false + "1"); // 01
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(null + "1"); // 1
console.log(undefined + "1"); // undefined1
console.log( 1 + 2); // 3
console.log( 1 + "2"); // 12
console.log( 1 + 2 + "2"); // 32
console.log( "2" + 1 + 2); // 212
console.log( 1 + 2 + "2" + 1 + 2); // 3212
console.log( 1 + 2 + "2" + (1 + 2)); // 3213
console.log( 1 + 2 + "2" + (1 + 2) + 1 + 2); // 321312
