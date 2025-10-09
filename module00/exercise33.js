function fun(...numbers){
    let evens = 0;
    for (let number of numbers){
        if (number % 2 === 0)
            evens++;
    }
    return evens;
}

let result = fun(1,2,3,4,5,6,7,8,9,10);
console.log(result);