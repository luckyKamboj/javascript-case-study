let balance = 1000.64;
console.log(Math.floor(balance)); // 1000
console.log(Math.ceil(balance));  // 1001
console.log(Math.round(balance)); // 1001

balance = 1000.44;
console.log(Math.floor(balance)); // 1000
console.log(Math.ceil(balance));  // 1001
console.log(Math.round(balance)); // 1000

balance = 4;
console.log(Math.pow(balance, 3)); // 64
console.log(Math.sqrt(balance)); // 2
console.log(Math.sign(balance)); // 1

balance = -4;
console.log(Math.sign(balance)); // -1

balance = 0;
console.log(Math.sign(balance)); // 0

console.log(Math.min(5, 2, 1, 4, 3)); // 1
console.log(Math.max(1, 2, 2, 5, 3)); // 5

console.log(Math.random()); // random number between 0 and 1

console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9

let max = 6;
let min = 1;
console.log(Math.floor(Math.random() * (max -min + 1)) + min); // random number between 1 and 6

// value of iterations can be changed to generate more random numbers
let iterations = 10;
for (let i = 0; i < iterations; i++) {
    let newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if(newRandomNumber < min || newRandomNumber > max){
        console.log("Error: Random number is out of range");
        break;
    }
    console.log(newRandomNumber);
}
