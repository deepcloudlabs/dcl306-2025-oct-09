export default class Move {
    constructor({guess, secret, perfect_match, partial_match}) {
        this.guess = guess;
        this.secret = secret;
        this.perfect_match = perfect_match;
        this.partial_match = partial_match;
        this.message = Move.generateMessage(perfect_match, partial_match);
    }

    static generateMessage(perfect, partial) {
        let message = "";
        if (partial === 0 && perfect === 0) {
            message = "No Match";
        } else {
            if (partial > 0) {
                message = `-${partial}`;
            }
            if (perfect > 0) {
                message = `${message}+${perfect}`;
            }
        }
        return message;
    }
}