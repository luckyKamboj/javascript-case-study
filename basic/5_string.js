

const username = "John";
const age = 30;
// old way of concatenation
console.log("Current user name is " + username); // Current user name is John
console.log("He is " + age + " years old"); // He is 30 years old
// string interpolation
console.log(`Current user name is ${username}`); // Current user name is John
console.log(`He is ${age} years old`); // He is 30 years old

// String methods for precise string manipulation
const value = `LuckyKambojChachotta`;
console.log(value.length); // 20
console.log(value.toUpperCase());
console.log(value.toLowerCase());
// at supports negative index as well
console.log(value.at(-1));  // a  
console.log(value.at(-4));  // o 
console.log(value.charAt(0)); // L
// In JavaScript, both codePointAt() and charCodeAt() return a numeric Unicode value for a character, 
// but they handle Unicode characters outside the Basic Multilingual Plane (BMP) differently.
// JavaScript strings use UTF-16
// charCodeAt() gives you the individual UTF-16 code unit. charCodeAt() is useful when we care about UTF-16 encoding;
// codePointAt() recognizes the surrogate pair and gives you the complete Unicode code point. 
// codePointAt() is useful when we care about the actual Unicode character.
console.log(value.charCodeAt(0)); // 76
console.log(value.codePointAt(0)); // 76
// substring() and slice() are similar, but they have some differences in how they handle negative indices 
// and the order of the start and end parameters.
console.log(value.substring(0, 5)); // Lucky
console.log(value.slice(-17, 5)); 
// built-in methods, these methods are not recommended to use in production code 
// as they are deprecated and may be removed in future versions of JavaScript.
console.log(value.anchor("https://www.google.com")); // <a name="https://www.google.com">LuckyKambojChachotta</a>
console.log(value.big()); // <big>LuckyKambojChachotta</big>
console.log(value.blink()); // <blink>LuckyKambojChachotta</blink>
console.log(value.fixed());
console.log(value.strike());
console.log(value.fontcolor("red")); 
