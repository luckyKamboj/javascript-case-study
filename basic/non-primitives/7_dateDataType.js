let currentDate = new Date();
console.log(`Current Date normal date        : ${currentDate}`);
console.log(`Current Date getDateString      : ${currentDate.toString()}`);
console.log(`Current Date toDateString       : ${currentDate.toDateString()}`);
console.log(`Current Date toLocaleString     : ${currentDate.toLocaleString()}`);
console.log(`Current Date toUTCString        : ${currentDate.toUTCString()}`);
console.log(`Current Date toLocaleDateString : ${currentDate.toLocaleDateString()}`);

let newCurrentDate = new Date(2024, 0, 15); 
console.log(`Current Date2 normal date        : ${newCurrentDate}`);
console.log(`Current Date2 getDateString      : ${newCurrentDate.toString()}`);
console.log(`Current Date2 toDateString       : ${newCurrentDate.toDateString()}`);
console.log(`Current Date2 toUTCString        : ${newCurrentDate.toUTCString()}`);
console.log(`Current Date2 toLocaleDateString : ${newCurrentDate.toLocaleDateString()}`);

//currentDate = new Date("2024-0-12"); // in yyyy-MM-dd format month values starts from 1. 
currentDate = new Date("2024-1-12"); 
console.log(`Current Date3 normal date        : ${currentDate.getDate()}`);
console.log(`Current Date3 normal time        : ${currentDate.getTime()}`);
console.log(`Current Date3                    : ${currentDate.getDay()}`);
console.log(`Current Date3 getDateString      : ${currentDate.getTime().toString()}`);
console.log(`Curren Date2 valueOf             : ${currentDate.valueOf()}`)
