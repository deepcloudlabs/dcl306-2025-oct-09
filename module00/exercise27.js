function toplam(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

let sayilar = [4, 8, 15, 16, 23, 42];
console.log(toplam(sayilar))
console.log(toplam([4, 8, 15, 16, 23, 42]));

function take_sum(x,y,...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum+x+y;
}
console.log(take_sum(4, 8, 15, 16, 23, 42, 55, 88));
