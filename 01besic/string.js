const name = "Aditya";
const surNa = "Sarkar"
// console.log(name);
//string new concatenation method :
console.log(`this is my firstName ${name} and surname is ${surNa} `);
let num = "    bittu  ";
let num1 = "bittu";

let numNew = "Aditya Bittu bapi";

console.log(num.trim());//it used to remove whitespace 
console.log(num1.toUpperCase()); // converts all string alphabetic to uppercase
// console.log(numNew.substring(6,12));//The difference is that start and end values less than 0 are treated as 0 in substring() its similer to slice();
console.log(numNew.slice(6,12));//slice() extracts a part of a string and returns the extracted part in a new string.
console.log(numNew.length);//leangth is string
console.log(numNew.replace("Bittu","sarkar"));//replace specified value to another value
console.log(numNew.charAt(3));// find index number position
console.log(numNew.includes("bapi"));//search any string 