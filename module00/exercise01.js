// js engine <- js code
let x = "jack bauer";
console.log(typeof(x)); // string

x = 2 + 2 === 4;
console.log(typeof(x)); // boolean

x = 3.1415;
console.log(typeof(x)); // Number

x = {fullname: "jack bauer", salary: 100_000, iban: "tr1"};
console.log(typeof(x)); // Object

x = [4, 8, 15, 16, 23, 42];
console.log(typeof(x)); // Object

x = function(){}
console.log(typeof(x)); // function

x = () => {}
console.log(typeof(x)); // function

x = new Array([1,2,3,4,6,7]);
console.log(typeof(x));
