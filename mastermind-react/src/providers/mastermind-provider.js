import create_secret from "../utils/game-utils";
import React, {useReducer} from "react";
import MasterMindStateless from "../MastermindStateless";
import MastermindReducer from "../reducers/mastermind-reducer";

const initial_state = {
    level: 3,
    secret: create_secret(3),
    moves: [],
    guess: 123,
    lives: 3,
    tries: 0,
    counter: 100,
    constraints: {
        max_tries: 10,
        timeout: 100
    },
    statistics: {
        wins: 0,
        loses: 0,
        average_moves: 0
    }
};
export const MastermindContext = React.createContext(initial_state);
export default function MasterMindProvider() {
    const [mastermind, dispatchMastermind] = useReducer(MastermindReducer, initial_state);
    return (
        <MastermindContext.Provider value={{mastermind, dispatchMastermind}}>
            <MasterMindStateless></MasterMindStateless>
        </MastermindContext.Provider>
    );
}