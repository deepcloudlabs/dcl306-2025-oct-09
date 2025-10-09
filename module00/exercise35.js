function fun(...numbers){
    return new Promise((resolve,reject)=>{
        console.log("fun() is now working...");
        let evens = 0;
        for (let number of numbers){
            if (number % 2 === 0)
                evens++;
        }
        setTimeout(()=>{resolve(evens);},3_000);
    });
}

console.log("Application is just started!");
fun(1,2,3,4,5,6,7,8,9,10).then( number_of_evens => console.log(number_of_evens));
console.log("Application is just completed!");
