export default function MastermindReducer(state, action) {
    const newState = {...state};
    switch (action.type) {
        case "play":
            alert("button clicked!")
            break;
        case "guess_changed":
            newState.guess = Number(action.value);
            break;
        case "timer_ticked":
            newState.counter--;
            break;
        default:
            throw "Unknow action type";
    }
    return newState;
}