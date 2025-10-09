function fun(x,y,z){
    if (arguments.length !== 3) // guard
        throw `You must provide exactly 3 arguments! But you have provided ${arguments.length} argument(s).`;
    return x + y * z;
}

//console.log(fun());
//console.log(fun(10));
//console.log(fun(10,20));
console.log(fun(10,20,30));
// console.log(fun(10,20,30,40,50,60,70));