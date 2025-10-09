function* get_evens(numbers){
    for (let number of numbers){
        if(number % 2 === 0){
            console.log(`get_evens(): ${number}`);
            yield number;
        }
    }
}

for (let even_number of get_evens([4,8,15,16,23,42,44,48,50,52])){
    if (even_number> 30){
        break;
    }
    console.log(`for: ${even_number}`);
}
