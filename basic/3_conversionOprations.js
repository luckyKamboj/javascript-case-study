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
