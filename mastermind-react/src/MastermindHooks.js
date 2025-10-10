import Container from "./components/common/container";
import Card from "./components/common/card";
import Badge from "./components/common/badge";
import InputText from "./components/common/input-text";
import Button from "./components/common/button";
import Table from "./components/common/table";
import React, {useEffect, useState} from "react";
import create_secret, {evaluateMove} from "./utils/game-utils";
import {useNavigate} from "react-router";

const initial_secret = create_secret(3);
export default function MastermindHooks() {
    const [secret, setSecret] = useState(initial_secret);
    const [level, setLevel] = useState(3);
    const [lives, setLives] = useState(3);
    const [tries, setTries] = useState(0);
    const [counter, setCounter] = useState(100);
    const [guess, setGuess] = useState(123);
    const [moves, setMoves] = useState([]);
    const [constraints, setConstraints] = useState({
        max_tries: 10,
        timeout: 100
    });

    const navigate = useNavigate();

    useEffect(() => {
        const timer_id = setInterval(() => {
            setCounter(prevCounter => prevCounter - 1);
            if (counter <= 0) {
                setLives(prevLives => prevLives - 1);
                if (lives <= 0) {
                    navigate("/loses");
                    return;
                }
                setSecret(create_secret(level));
                setMoves([]);
                setTries(0);
                setCounter(constraints.timeout);
            }
        }, 1_000);
        return () => {
            clearInterval(timer_id);
        }
    })

    const handleChange = (e) => {
        setGuess(Number(e.target?.value));
    }

    const play = (e) => {
        setTries(prevTries => prevTries + 1);
        /*
        setTries(prevTries => prevTries + 1);
        setTries(prevTries => prevTries + 1);
        */
        console.log(tries); // still holds the previous value!
        if (secret === guess) {
            setLevel(prevLevel => prevLevel + 1);
            if (level > 3) {
                //TODO: player wins! -> routing
                navigate("/wins");
                return;
            }
            setSecret(create_secret(level + 1));
            setMoves([]);
            setTries(0); // schedules state updates!
            // bulk/batch updates => performance
            setConstraints(prevContraints => ({
                max_tries: prevContraints.max_tries + 2,
                timeout: prevContraints.timeout + 40
            }));
            setCounter(constraints.timeout + 40);
            setLives(prevLives => prevLives + 1);
        } else {
            if (tries > constraints.max_tries) {
                if (lives === 0) {
                    //player loses! -> routing
                    navigate("/loses");
                    return;
                }
                setLives(prevLives => prevLives - 1);
                setSecret(create_secret(level));
                setMoves([]);
                setTries(0);
            } else {
                setMoves([...moves, evaluateMove(guess, secret)]);
            }
        }
    }

    return (
        <Container>
            <p></p>
            <Card title={"Mastermind Game Console"}>
                <Badge label="Game Level" color={"bg-success"} value={level}/>
                <Badge label="Lives" color={"bg-danger"} value={lives}/>
                <Badge isVisible={tries > 0} label="Tries" color={"bg-info"} value={tries}/>
                <Badge label="Timeout" color={"bg-warning"} value={counter}/>
                <InputText label={"Guess"}
                           value={guess}
                           form_id={"guess"}
                           placeholder={"Enter your guess"}
                           handleChange={handleChange}/>
                <Button label={"Play"} color={"btn-success"} click={play}></Button>
            </Card>
            <p></p>
            <Card title={"Moves"}>
                <Table column_names={["Guess", "Perfect Match", "Partial Match", "Message"]} items={moves}
                       fields={["guess", "perfect_match", "partial_match", "message"]}></Table>
            </Card>
        </Container>);
}