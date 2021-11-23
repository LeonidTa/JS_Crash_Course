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

//STRINGS
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
console.log(t.split(', '));                               //In this case the separator is the comma and space after it. 


//ARRAYS
const numbers = new Array(1,2,3,4,5);                     //Normal Array constructor
console.log(numbers);

const fruits = ['apples', 'Oranges', 'Pears', 1, true]    //no need to make a constructor -> easier
console.log(fruits);
console.log(fruits[1]);     //Arrays are Zero based, same as in JAVA

fruits[3] = 'grapes';       //You can add values to a CONST, but not change them
console.log(fruits);

fruits.push('mangos');      //This is an easier way to add new values in the array, if you dont know the last index of the array
console.log(fruits);
fruits.pop();               //Removes the last value
console.log(fruits)

fruits.unshift('strawberries'); //Adds value in the beginning of the array
console.log(fruits);

console.log(Array.isArray('Hello')); //Checks if something is in a array

console.log(fruits.indexOf('oranges'));     //Checks the index of a value in an array

//OBJECT LITERALS
const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies:['music','movies', 'sports'],
    address: {                                 //Address is an Object within the Object person
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);                             //select the object person
console.log(person.firstName, person.lastName);  //select specific properties of the person
console.log(person.hobbies[1]);                  //selecting a specific value of an array

const {firstName, lastName, address: {city}} = person;           //creating a variable --> you can destructure the object
console.log(firstName);

person.email = 'john@gmail.com'                  //You can add properties later on
console.log(person);

const todos = [                                  //This is an array of objects
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },    
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);                     //Here Im Selecting the Object in the Array with the index 1 and the property text


//Converting my Objects to a JSON

const todoJSON = JSON.stringify(todos);         //Since this is a JSON File now, you can proceed to send this JSON to a server
console.log(todoJSON);  

//LOOPS
//For Loop
for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

//While
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Loop through Array
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}


for (let todo of todos) {            //FOROF is the same as ITER in JAVA
    console.log(todo.text);
}

//High order Array methods
//forEach
todos.forEach(function(todo){
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo){      //Gives you an array of values back
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos.map(function(todo){      
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

const a = 4;

if(a === 10){                   // Double Equals (==) matches the numbers regardles if one number is a String and other is an Integer. Triple Equals (===) matches the Datatypes.
    console.log('x is 10');
} else if (x > 10){
    console.log('x is greater 10')
} else {
    console.log('x is NOT 10')
}

// Ternary Operator
const c = 11;

const color = c > 10 ? 'red' : 'blue';  //? means then and : means else
console.log(color);

// Switches
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');   
}

//Functions
function addNum(num1, num2){
   return num1 + num2;
}

console.log(addNum(5,4));

// Arrow functions
const addNums = (num1, num2) => num1 + num2;
console.log(addNums(10,10));

