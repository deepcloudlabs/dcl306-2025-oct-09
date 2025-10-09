import React from "react";

// MVC
const initial_state = {
    level: 3,
    secret: 549,
    moves: [],
    guess: 123,
    lives: 3,
    tries: 0,
    max_tries: 10,
    timeout: 100,
    count_down_counter: 100
};

class Mastermind extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = initial_state;
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
/*
        this.timer_id = setInterval(() => {
            let newState = {...this.state};
            newState.count_down_counter--;
            this.setState(newState,() => {
                console.log(`Model: ${this.state.count_down_counter}, ${newState.count_down_counter} `);
            });
        }, 1_000);
        */
        this.timer_id = setInterval(() => {
            let count_down_counter = this.state.count_down_counter -1;
            this.setState({count_down_counter});
        },1_000);
    }

    componentWillUnmount() {
        clearInterval(this.timer_id);
    }

    handleChange = (event) => {
        this.setState({guess: Number(event.target.value)});
    }

    // Model -- bind (this.setState()) --> View
    // Model <-- bind -- View <-- User
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4><span className="card-title">*MasterMind*</span></h4>
                    </div>
                    <div className="card-body">
                        <h4>Timeout: <span className="card-text">{this.state.count_down_counter}</span></h4>
                        <div className="form-text">
                            <label className={"form-label"}
                                   htmlFor="guess">Guess:</label>
                            <input className={"form-control"}
                                   type="text"
                                   id="guess"
                                   onChange={this.handleChange}
                                   value={this.state.guess}
                                   placeholder="Enter Guess"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mastermind;
