import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RegisterScreen() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const payload = {
            "username": username,
            "password": password
        }

        fetch("http://0.0.0.0:8080/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                console.log("Success");
                navigate("/login");
            })
    }

    return (
        <Container className="d-flex vh-100">
            <Row className="m-auto">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Form className="m-3 text-center" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="input username" autoComplete="false" onChange={e => setUsername(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="input password" autoComplete="false" onChange={e => setPassword(e.target.value)} ></Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}