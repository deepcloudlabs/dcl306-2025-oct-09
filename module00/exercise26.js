function fun({x=1,y=2,z=3,t=0}){
    return x + y * z - t;
}

console.log(fun({
}));
fun({t: 100})
