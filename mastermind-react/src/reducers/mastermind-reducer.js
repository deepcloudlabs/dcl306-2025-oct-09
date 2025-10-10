import create_secret, {evaluateMove} from "../utils/game-utils";

function play(newState, action) {
    newState.tries++;
    if (newState.secret === newState.guess) {
        newState.level++;
        if (newState.level > 10) {
            newState.status = "PLAYER_WINS";
            return;
        }
        newState.secret = create_secret(newState.level);
        newState.moves = [];
        newState.tries = 0;
        //Reward: max tries: +2, time constraint: +40, lives: +1
        newState.constraints.max_tries += 2;
        newState.constraints.timeout += 40;
        newState.counter = newState.constraints.timeout;
        newState.lives += 1;
    } else {
        if (newState.tries > newState.constraints.max_tries) {
            newState.lives--;
            if (newState.lives === 0) {
                newState.status = "PLAYER_LOSES";
                return;
            }
            newState.secret = create_secret(newState.level);
            newState.moves = [];
            newState.tries = 0;
        } else {
            newState.moves.push(evaluateMove(newState.guess, newState.secret));
        }
    }
}

function countDown(newState, action) {
    newState.counter--;
    if (newState.counter <= 0) {
        newState.lives--;
        if (newState.lives <= 0) {
            newState.status = "PLAYER_LOSES";
            return;
        }
        newState.secret = create_secret(newState.level);
        newState.moves = [];
        newState.tries = 0;
        newState.counter = newState.constraints.timeout;
    }
}

export default function MastermindReducer(state, action) {
    const newState = {...state};
    newState.constraints = {...state.constraints};
    newState.moves = [...state.moves];
    switch (action.type) {
        case "play":
            play(newState, action);
            break;
        case "guess_changed":
            newState.guess = Number(action.value);
            break;
        case "timer_ticked":
            countDown(newState, action);
            break;
        default:
            throw new Error("Unknow action type");
    }
    return newState;
}