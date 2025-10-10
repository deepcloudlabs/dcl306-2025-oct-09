import Move from "../model/move";

export function create_random_digit(low = 0, high = 9) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

export default function create_secret(level = 3) {
    const digits = [create_random_digit(1, 9)];
    while (digits.length < level) {
        const digit = create_random_digit(0, 9);
        if (digits.includes(digit)) continue;
        digits.push(digit);
    }
    let secret_number = Number(digits.join(''));
    console.log(secret_number);
    return secret_number;
}

export function evaluateMove(guess, secret) {
    const guessAsString = guess.toString();
    const secretAsString = secret.toString();
    let perfect_match = 0, partial_match = 0;
    for (let i = 0; i < guessAsString.length; i++) {
        const g = guessAsString.charAt(i);
        for (let j = 0; j < secretAsString.length; j++) {
            const s = secretAsString.charAt(j);
            if (s === g) {
                if (i === j) {
                    perfect_match++;
                } else {
                    partial_match++;
                }
            }
        }
    }
    return new Move({guess, secret, perfect_match, partial_match});
}
