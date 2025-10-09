let global_data = 0;

function* get_evens(numbers) {
    console.log("get_evens() is just started!");
    for (let number of numbers) {
        if (number % 2 === 0) {
            console.log(`get_evens(): ${number}`);
            yield number+global_data;
        }
    }
}

console.log("application is just started!");
result = get_evens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Lazy
let _generated;
do {
    global_data++;
    _generated = result.next();
    if (_generated.done) {
        break;
    }
    console.log(_generated.value);

} while (true);
console.log("application is just completed!");
