import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function CardComponent(props) {

    const [count, setCount] = useState(0);

    function getCountData(timeframe) {
        const url = `http://0.0.0.0:8080/activity/count?` + new URLSearchParams({
            "timeframe": timeframe
        })
        try {
            fetch(url).then((response) => {
                if (response.ok) {return response.json()};
            }).then((data) => {
                setCount(data.message);
            })
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const timeframe = props.text;
        getCountData(timeframe);
    }, []);

    return (
        <Card className="m-2 text-center">
            <Card.Header>{props.headerName}</Card.Header>
            <Card.Body>
                <Card.Title>{props.titleValue}</Card.Title>
                <Card.Text>
                    {count} <br />
                    Aktivitas Jaringan
                </Card.Text>
            </Card.Body>
        </Card>
    )
}