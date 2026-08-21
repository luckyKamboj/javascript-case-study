"use strict";

// Primitive data types are immutable and hold a single value. 
// They include numbers, bigint, null, undefined, strings, booleans, null, undefined and symbols.

//alert(3 + 3); read doc to get more window method
// number -> upto 2 to power 53
// bigint -> upto 2 to power 63 by adding n at the end of number becomes bigint.
console.log(25324632463246236263223n);
// string -> ""
// boolean -> true or false
// null -> empty value
// undefined -> variable is declared but not assigned
// Symbol -> unique identifier 

const symbol1 = Symbol("myIdentifier");
const symbol2 = Symbol("myIdentifier");

console.log(symbol1 === symbol2); // false
console.log(typeof symbol1);       // "symbol"

// Non-primitive data types are objects, arrays, functions, and dates. They are mutable and can hold multiple values. 
// object -> key value pair

const myObject = {
    'name': 'John', 
    'age': 30, 
    'city': 'New York'
};

// date -> date object
const myDate = new Date();
// array -> list of values
const myArray = [1, 2, 3, 4, 5];
// function -> block of code that can be executed
const myFunction = function() {
    return "Hello World";
};

console.log(typeof myObject); // "object"
console.log(typeof myDate); // "object"
console.log(typeof myArray); // "object"
console.log(typeof myFunction); // "function"
console.log(myFunction()); // "Hello World"


// Stack(premitive) and Heap(non-primitive) memory allocation
// Stack memory is used for primitive data types and is faster to access. it always provide a copy of the value.
// Heap memory is used for non-primitive data types and is slower to access. it always provide a reference of the original value.
