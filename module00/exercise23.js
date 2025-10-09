function fun(x=10,y=20,z=30){
    return x + y * z;
}

console.log(fun());
console.log(fun(10));
console.log(fun(10,20));
console.log(fun(10,20,30));
console.log(fun(10,20,30,40,50,60,70));