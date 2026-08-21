const userId = 1234;
// prevent use of var, use let instead because var is function scoped and can lead to unexpected behavior
var userName = 'test';
let email = 'test@gmail.com';
password = 'passwrd';
console.table({ userId, userName, email, password});
// userId = 2;  const keyword does not allow reassignment
//console.assert(userName.length > 4, 'User name is too short');

userName = 'test1'
email = 'test1gmail.com';
password = 'password';
console.table({ userId, userName, email, password });
console.log(typeof password); // string

let work;
console.log('Value of work : ' + work); // undefined
console.log('Type of work : ' + typeof work); // undefined

let age = null;
console.log('Value of age : ' + age); // null
console.log('Type of age : ' + typeof age); // object

// hobby;
// console.log(hobby); // ReferenceError: hobby is not defined
