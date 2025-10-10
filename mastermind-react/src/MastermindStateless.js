import Container from "./components/common/container";
import Card from "./components/common/card";
import Badge from "./components/common/badge";
import InputText from "./components/common/input-text";
import Button from "./components/common/button";
import Table from "./components/common/table";
import React, {useContext, useEffect} from "react";
import {MastermindContext} from "./providers/mastermind-provider";

export default function MasterMindStateless() {
    const {mastermind, dispatchMastermind} = useContext(MastermindContext);
    const handleChange = e => {
        dispatchMastermind({type: "guess_changed", value: e.target.value});
    };
    const play = e => {
        dispatchMastermind({type: "play", value: e.target.label});
    };
    useEffect(() => {
        const timer_id = setInterval(() => {
            dispatchMastermind({type: "timer_ticked"});
        }, 1_000);
        return () => {
            clearInterval(timer_id);
        }
    }, []);
    return (
        <Container>
            <p></p>
            <Card title={"Mastermind Game Console"}>
                <Badge label="Game Level" color={"bg-success"} value={mastermind.level}/>
                <Badge label="Lives" color={"bg-danger"} value={mastermind.lives}/>
                <Badge isVisible={mastermind.tries > 0} label="Tries" color={"bg-info"} value={mastermind.tries}/>
                <Badge label="Timeout" color={"bg-warning"} value={mastermind.counter}/>
                <InputText label={"Guess"}
                           value={mastermind.guess}
                           form_id={"guess"}
                           placeholder={"Enter your guess"}
                           handleChange={handleChange}/>
                <Button label={"Play"} color={"btn-success"} click={play}></Button>
            </Card>
            <p></p>
            <Card title={"Moves"}>
                <Table column_names={["Guess", "Perfect Match", "Partial Match", "Message"]} items={mastermind.moves}
                       fields={["guess", "perfect_match", "partial_match", "message"]}></Table>
            </Card>
        </Container>
    );
}