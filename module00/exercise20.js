function is_even(n){
    return n % 2 === 0;
}

const is_odd = function(n){
    return n % 2 === 1;
};

const is_nan = n =>  !(n === n); // lambda expression
console.log(is_even(42));
console.log(is_even(15));
console.log(is_odd(42));
console.log(is_odd(15));

console.log(is_nan(0/0));