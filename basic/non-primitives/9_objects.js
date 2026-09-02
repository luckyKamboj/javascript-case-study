// Object creation - 3 ways
const val = new Object({val : "old"});
console.log(val);

const newOb = Object.create({ val: "new"});

console.log(newOb);

const sym = Symbol("Hello");
const myObj = {
    id : 234,
    username: "Lucky",
    lastname: "kamboj",
    [sym]: "This is symbol value",   // symbol as key
    "full name": "Lucky Kamboj",     // key with space
    email: "lucky@test.com",
    isLoggedIn: false,
    phoneNumbers: [234235252,32453463463], 
    profession: "Engineer",
};

// three ways of accessing Object properties
console.log(myObj.username);
console.log(myObj["full name"]);
console.log(myObj[sym]);
// console.log(myObj);
