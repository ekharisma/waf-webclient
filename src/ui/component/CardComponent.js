import { Card } from "react-bootstrap";

export default function CardComponent(props) {
    return (
        <Card className="m-2 text-center">
            <Card.Header>{props.headerName}</Card.Header>
            <Card.Body>
                <Card.Title>{props.titleValue}</Card.Title>
                <Card.Text>
                    {props.text} <br />
                    Serangan
                </Card.Text>
            </Card.Body>
        </Card>
    )
}