export default class Move {
    constructor({guess,secret,perfect_match,partial_match}) {
        this.guess = guess;
        this.secret = secret;
        this.perfect_match = perfect_match;
        this.partial_match = partial_match;
        this.message = "";
        if (partial_match === 0 && perfect_match === 0) {
            this.message = "No Match";
        } else {
            if (partial_match > 0) {
                this.message = `-${partial_match}`;
            }
            if (perfect_match > 0) {
                this.message = `${this.message}+${perfect_match}`;
            }
        }
    }
}