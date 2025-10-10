import React from "react";
import Container from "./components/common/container";
import Card from "./components/common/card";
import InputText from "./components/common/input-text";
import Button from "./components/common/button";
import Badge from "./components/common/badge";

// MVC
const initial_state = {
    game: {
        level: 3,
        secret: 549,
        moves: [],
        guess: 123,
        lives: 3,
        tries: 0,
    },
    counter: 100,
    constrains: {
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

    play = e => {
        let newState = {...this.state};
        newState.game = {...this.state.game};
        newState.game.tries++;
        this.setState(newState);
    }

    // Model/State -- bind (this.setState()) --> View
    // Model <-- bind -- View <-- User
    render() {
        return (
            <Container>
                <Card title={"Mastermind Game Console"}>
                    <Badge label="Game Level" color={"bg-success"} value={this.state.game.level}/>
                    <Badge label="Lives" color={"bg-danger"} value={this.state.game.lives}/>
                    <Badge isVisible={this.state.game.tries > 0} label="Tries" color={"bg-info"} value={this.state.game.tries}/>
                    <Badge label="Timeout" color={"bg-warning"} value={this.state.counter}/>
                    <InputText label={"Guess"}
                               value={this.state.game.guess}
                               form_id={"guess"}
                               placeholder={"Enter your guess"}
                               handleChange={this.handleChange}/>
                    <Button label={"Play"} color={"btn-success"} click={this.play}></Button>
                </Card>
            </Container>
        );
    }
}

export default Mastermind;
