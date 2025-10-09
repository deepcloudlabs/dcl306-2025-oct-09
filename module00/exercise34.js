function fun(n){
    return function(x){
        return x ** n;
    }
}
let n = 2;
const square = fun(n);
n++;
const cube = fun(n);
console.log(square(4)); // 16
console.log(cube(4)); // 64
n++;
console.log(square(4)); // 16
console.log(cube(4)); // 64
