export function create_random_digit(low=0,high=9){
    return Math.floor(Math.random() * (high - low + 1) + low);
}

export default function create_secret(level=3){
    const digits = [create_random_digit(1,9)];
    while (digits.length < level){
        const digit = create_random_digit(0,9);
        if (digits.includes(digit)) continue;
        digits.push(digit);
    }
    return Number(digits.join(''));
}

