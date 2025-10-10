import Container from "../common/container";
import Card from "../common/card";
import {Link} from "react-router";

export default function PlayerWins(){
    return (
        <Container>
            <Card title={"Congrats: You win!"}>
                <Link to={"/"}>Play again?</Link>
            </Card>
        </Container>
    )
}