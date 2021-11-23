// alert('Test'); --> Should not be used, because it blockes the whole page
console.log('Hello World'); // Logs in the console
console.error('This is an error'); // Gives you an error in the console with the line number
console.warn('Warning!');

//Variables
//var, let, const
//var shouldn't be used because it is globally scoped and we have let and const as new variables

/*
let age = 30;
age = 31;

console.log('age: ' + age);
*/

// Datatypes --> Strings, Numbers, Boolean, null, undefined, Symbol

const name = 'John';    //String
const age = 30;         //Int
const rating = 4.5;     //decimal -> float / double
const isCool = true;    //boolean -> true, false
const x = null;         //null
const y = undefined;    //undefined
let z;                  //also undefinded

console.log(typeof z);  //typeof -> shows the type of the variable

//Concatenation
console.log('My name is ' + name + ' and I am ' + age); //Old way of doing it

//Template String
console.log(`My name is ${name} and I am ${age}`); // new way of doing it


const s = 'Hello World';
console.log(s.length);                          //length of the String
console.log(s.toUpperCase());                   //makes the letters uppercase
console.log(s.substring(0,5));                  //Gives you a part of the String
console.log(s.substring(0,5).toUpperCase());    //Gives you first 5 letters and makes them uppercase
console.log(s.split(''));                       //Separates the String into Array

//UseCase for using split method in a String
const t = 'technology, computers, it, code';
console.log(t.split(', '));                     //In this case the separator is the comma and space after it. 


