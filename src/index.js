import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNumbers = numbers.map(number => number * 2);
console.log(newNumbers);
//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const filteredNumbers = numbers.filter(number => number > 10);
console.log(filteredNumbers);
//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
const reducer = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reducer);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const findOne = numbers.find(number => number < 10);
console.log(findOne);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const findIndexOfOne = numbers.findIndex(number => number < 10);
console.log(findIndexOfOne);
