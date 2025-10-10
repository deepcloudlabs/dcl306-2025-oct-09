import Container from "../common/container";
import Card from "../common/card";
import {Link} from "react-router";

export default function PlayerLoses({}){
    return (
        <Container>
            <Card title={"Game Console"}>
                <Link to={"/"}>Play again?</Link>
            </Card>
        </Container>
    )
}