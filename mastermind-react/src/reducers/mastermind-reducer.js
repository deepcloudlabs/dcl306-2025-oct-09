import create_secret, {evaluateMove} from "../utils/game-utils";

export const ActionTypes = Object.freeze({
    PLAY: "play",
    GUESS_CHANGED: "guess_changed",
    TIMER_TICKED: "timer_ticked",
});

const MAX_LEVEL = 10;

const REWARD = Object.freeze({
    incrementMaxTriesBy: 2,
    incrementTimeoutBy: 40,
    incrementLivesBy: 1,
});

/** Helpers return a brand-new state (no mutation) */
function onWin(state) {
    const nextLevel = state.level + 1;
    if (nextLevel > MAX_LEVEL) {
        return {...state, status: "PLAYER_WINS"};
    }

    // Level up + rewards
    const nextConstraints = {
        ...state.constraints,
        max_tries: state.constraints.max_tries + REWARD.incrementMaxTriesBy,
        timeout: state.constraints.timeout + REWARD.incrementTimeoutBy,
    };

    return {
        ...state,
        level: nextLevel,
        secret: create_secret(nextLevel),
        moves: [],
        tries: 0,
        lives: state.lives + REWARD.incrementLivesBy,
        constraints: nextConstraints,
        counter: nextConstraints.timeout,
    };
}

function onExceedTries(state) {
    const nextLives = state.lives - 1;
    if (nextLives === 0) {
        return {...state, lives: 0, status: "PLAYER_LOSES"};
    }

    return {
        ...state,
        lives: nextLives,
        secret: create_secret(state.level),
        moves: [],
        tries: 0,
    };
}

function onValidTry(state) {
    const move = evaluateMove(state.guess, state.secret);
    console.log("onValidTry");
    return {
        ...state,
        moves: [...state.moves, move],
    };
}

function play(state) {
    const tries = state.tries + 1;
    if (state.secret === state.guess) {
        return onWin({...state, tries});
    }

    if (tries > state.constraints.max_tries) {
        return onExceedTries({...state, tries});
    }

    return onValidTry({...state, tries});
}

function countDown(state) {
    const counter = state.counter - 1;

    if (counter > 0) {
        return {...state, counter};
    }

    const nextLives = state.lives - 1;
    if (nextLives <= 0) {
        return {...state, lives: 0, status: "PLAYER_LOSES"};
    }

    return {
        ...state,
        lives: nextLives,
        secret: create_secret(state.level),
        moves: [],
        tries: 0,
        counter: state.constraints.timeout,
    };
}

export default function MastermindReducer(state, action) {
    switch (action.type) {
        case "play":
            return play(state, action);
        case "guess_changed":
            return {...state, guess: Number(action.value)};
        case "timer_ticked":
            return countDown(state);
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}