//1-chi masala
//Eng mashhur "salom dunyo!" ni qaytaradigan salom deb nomlangan oddiy funktsiyani yarating.

function greet(name) {
    return `hello world!`;
}

//2-chi masala
//Stringdagi bo'shliqlarni olib tashlaydigan funktsiyani yozing, so'ngra natijaviy qatorni qaytaring.
function noSpace(x){
    return x.split(' ').join('');
  }

//3-chi masala
//Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    //your code here
    return b.toString()
  }

//4-chi masala
//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i*2;
  }

//5-chi masla
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
  }

//6-chi masala
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    //code here
    return n.toString().split("").reverse().map(Number);
  }

//7-chi masla
//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    // Code here
    return str.toUpperCase()
  }

//8-chi masala
//Write a function to split a string and convert it into an array of words.

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
  }

//9-chi masala
//Given an array of integers, return a new array with each value doubled.
function maps(x){
    return x.map(num => num * 2);
  }

//10-chi masala
//Write a function to split a string and convert it into an array of words.
function stringToArray(string){

	// code code code
return string.split(" ")
}