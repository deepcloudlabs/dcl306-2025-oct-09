import React from "react";
import Container from "./components/common/container";
import Card from "./components/common/card";
import InputText from "./components/common/input-text";
import Button from "./components/common/button";
import Badge from "./components/common/badge";
import Move from "./model/move";
import Table from "./components/common/table";
import create_secret from "./utils/game-utils";

// MVC
const initial_state = {
    game: {
        level: 3,
        secret: create_secret(3),
        moves: [],
        guess: 123,
        lives: 3,
        tries: 0,
    },
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

class Mastermind extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = initial_state;
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.timer_id = setInterval(() => {
            this.setState((prevState) => {
                return {counter: prevState.counter - 1};
            });
        }, 1_000);
    }

    componentWillUnmount() {
        clearInterval(this.timer_id);
    }

    handleChange = (event) => {
        let game = {...this.state.game};
        game.guess = Number(event.target.value);
        // asynchronous function
        this.setState({game}, () => {
            console.log("Game state changed...");
        });
    }

    evaluateMove = (guess, secret) => {
        const guessAsString = guess.toString();
        const secretAsString = secret.toString();
        let perfect_match = 0, partial_match = 0;
        for (let i = 0; i < guessAsString.length; i++) {
            const g = guessAsString.charAt(i);
            for (let j = 0; j < secretAsString.length; j++) {
                const s = secretAsString.charAt(j);
                if (s === g){
                    if (i === j){
                        perfect_match++;
                    } else {
                        partial_match++;
                    }
                }
            }
        }
        return new Move({guess,secret,perfect_match,partial_match});
    }

    play = e => {
        let newState = {...this.state};
        newState.game = {...this.state.game};
        newState.constraints = {...this.state.constraints};
        newState.game.moves = [...this.state.game.moves];
        newState.game.tries++;
        if (newState.game.secret === this.state.game.guess) {
            newState.game.level++;
            if (newState.game.level > 10) {
                //TODO: player wins!
            }
            newState.game.secret = create_secret(newState.game.level);
            newState.game.moves = [];
            newState.game.tries = 0;
            //Reward: max tries: +2, time constraint: +40, lives: +1
            newState.constraints.max_tries += 2;
            newState.constraints.timeout += 40;
            newState.counter = newState.constraints.timeout;
            newState.game.lives += 1;
        } else {
            if (newState.game.tries > this.state.constraints.max_tries) {
                if(newState.game.lives === 0){
                    //TODO: player loses!
                }
                newState.game.lives--;
                newState.game.secret = create_secret(newState.game.level);
                newState.game.moves = [];
                newState.game.tries = 0;
            } else {
                newState.game.moves.push(this.evaluateMove(newState.game.guess, newState.game.secret));
            }
        }
        this.setState(newState);
    }

    // Model/State -- bind (this.setState()) --> View
    // Model <-- bind -- View <-- User
    render() {
        return (
            <Container>
                <p></p>
                <Card title={"Mastermind Game Console"}>
                    <Badge label="Game Level" color={"bg-success"} value={this.state.game.level}/>
                    <Badge label="Lives" color={"bg-danger"} value={this.state.game.lives}/>
                    <Badge isVisible={this.state.game.tries > 0} label="Tries" color={"bg-info"}
                           value={this.state.game.tries}/>
                    <Badge label="Timeout" color={"bg-warning"} value={this.state.counter}/>
                    <InputText label={"Guess"}
                               value={this.state.game.guess}
                               form_id={"guess"}
                               placeholder={"Enter your guess"}
                               handleChange={this.handleChange}/>
                    <Button label={"Play"} color={"btn-success"} click={this.play}></Button>
                </Card>
                <p></p>
                <Card title={"Moves"}>
                    <Table column_names={["Guess","Perfect Match","Partial Match","Message"]} items={this.state.game.moves} fields={["guess","perfect_match","partial_match","message"]}></Table>
                </Card>
            </Container>
        );
    }
}

export default Mastermind;
