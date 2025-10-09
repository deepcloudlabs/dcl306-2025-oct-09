async function fun(...numbers){
    let evens = 0;
    for (let number of numbers){
        if (number % 2 === 0)
            evens++;
    }
    return evens;
}

console.log("Application is just started!");
fun(1,2,3,4,5,6,7,8,9,10).then( number_of_evens => console.log(number_of_evens));
console.log("Application is just completed!");