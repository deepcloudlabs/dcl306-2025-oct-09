function fun(x,y,z,t = 0 ){
    return x + y * z - t;
}

console.log(fun(10,20,30));
console.log(fun(10,20,30, 10));
