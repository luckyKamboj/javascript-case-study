
/**
 * Arrays are not  primitive type they have following properties
 *  1. JS arrays are resizable and can contain a mix of different datatype. (use typed array instead)
 *  2. JS arrays are not associative arrays so, array elements cannot be accessed by using arbitrary 
 *     strings as indexes, accessed using non-negative integer and accessed from 0. 
 *  3. JS arrays array-copy operations create shallow copies. (good to have idea about shallow and deep copies)
 */ 

let originalArray = ['hello', 'user', 'this', 'is', 'original', 'array'];
// 1. AT
// at takes negative/positive values both, for negative values it reads from last index and last index starts from -1 
// if value passed in at method is greater than length of the array, it returns undefined.
console.log(`At method results:  ${originalArray.at(-1)}`);  // array
console.log(`At method results:  ${originalArray.at(-6)}`); // hello
console.log(`At method results:  ${originalArray.at(-7)}`);  // undefined
console.log(`At method results:  ${originalArray[-1]}`);  // undefined  

// 2. concat
// concatination doesn't update original array, it provides a new array with concatinated values
let newArray = [54,34,23];
let updatedArray = originalArray.concat(newArray)
console.log(`concat with original Array : ${originalArray}`); //[ 'hello', 'user', 'this', 'is', 'original', 'array' ]
console.log(`concat with updated array : ${updatedArray}`); //[ 'hello', 'user', 'this', 'is', 'original', 'array', 54, 34, 23 ]

// 3. copyWithin
// copyWithin - mutates the original array, it doesn't create a new array.
updatedArray = originalArray.copyWithin(2, 3);
console.log(`Updated array by copyWithin : ${updatedArray}`);
console.log(`Original array by copyWithin : ${originalArray}`);

// 4. entries
// entries returns iterable of key, value pairs of each entries. // use-case: if want for..of loop with break/continue statement. 

// console.log(originalArray.entries().find(val => val[1] =='array'));
// originalArray.entries().forEach(val => console.log(`${val[0]} : ${val[1]}`));
// originalArray.entries().drop(2).forEach(val => console.log(`${val[0]} : ${val[1]}`));
// console.log(originalArray.entries().every(val => (typeof val[1] == `string`)));

// 5. push and pop
// originalArray.push(`new`);
// originalArray.push(`work`);
// console.log(originalArray);
// const value = originalArray.pop();
// console.log(value);
// console.log(originalArray);

// 6. slice and splice 
// difference -> splice modifies the original array by taking slice of mentioned objects including upper bound.
// slice doesn't modify the original array and make a copy of values excluding upper bound.
// let sliceArray = originalArray.slice(1, 2);
// console.log(originalArray);
// console.log(sliceArray);
// let spliceArray = originalArray.splice(1, 2);
// console.log(originalArray);
// console.log(spliceArray);

// 7. join // creates a string of all the elements of origianl Array. default separator is `,`
console.log(originalArray);
console.log(originalArray.join('!')); 

// Shallow copy example ( [...] Spread operator, slice, from, concat, filter, map, flat)
// out of these [...], slice(), and Array.from() are best to use.

// Deep copy examples: structuredClone() (Best), JSON.parse(JSON.stringify()),
//  _.cloneDeep() [Only works if you have Lodash library installed], 
// Custom recursive(good for prectice, or specific scenarios only)

// Shallow and deep copies works same for primitive datatypes, as primitives are store in stack area 
// therefore in this case original array will not get impected in any case.
// Shallow and deep copies works differently for Objects, as Objects are store in the heap area and stack area
// only contains reference to original object. Shallow copy provides reference of same object in shallow copy whereas 
// in deep copy we gets a different object.

// Primitive data-type with shallow cloning
let copyArray = originalArray.slice(2,4);
// console.log(originalArray);
// console.log(copyArray);
// copyArray[1] = 'was';
// console.log(originalArray);
// console.log(copyArray);

// Primitive data-type with deep cloning
const deepCopy = JSON.parse(JSON.stringify(originalArray));
deepCopy[3] = 'was';
// console.log(originalArray);
// console.log(deepCopy);


// Reference data-type (array object inside an array) with shallow cloning
originalArray = [1,7,8, [32,56,68,86]];
copyArray = originalArray[3];
// console.log(originalArray); // [ 1, 7, 8, [ 32, 56, 68, 86 ] ]
// console.log(copyArray);  // [ 32, 56, 68, 86 ]

copyArray[4] = 23;
// console.log(originalArray); // [ 1, 7, 8, [ 32, 56, 68, 86, 23 ] ]
// console.log(copyArray); // [ 32, 56, 68, 86, 23 ]

// Reference data-type (array object inside an array) with deep cloning
// copyArray = JSON.parse(JSON.stringify(originalArray[3]));
// copyArray[5] = 33;
// console.log(originalArray); // [ 1, 7, 8, [ 32, 56, 68, 86, 23 ] ]
// console.log(copyArray); // [ 32, 56, 68, 86, 23, 33 ]

// StructuredClone example
// copyArray = structuredClone(originalArray);
// copyArray[3].push(32);
// console.log(originalArray); // [ 1, 7, 8, [ 32, 56, 68, 86, 23 ] ]
// console.log(copyArray); // [ 1, 7, 8, [ 32, 56, 68, 86, 23, 32 ] ]

// StructuredClone example
// copyArray = _.cloneDeep(originalArray);
// copyArray[3].push(32);
// console.log(originalArray); // [ 1, 7, 8, [ 32, 56, 68, 86, 23 ] ]
// console.log(copyArray); // [ 1, 7, 8, [ 32, 56, 68, 86, 23, 32 ] ]

