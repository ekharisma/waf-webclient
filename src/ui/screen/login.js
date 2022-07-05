import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated, setAccessToken } from "../../data/localStorage";

export default function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const payload = {
            "username": username,
            "password": password
        }

        fetch("http://0.0.0.0:8080/login", {
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
                else { alert("username atau password salah"); }
            })
            .then(data => {
                console.log("Success");
                const token = data.message;
                setAccessToken(token);
                navigate("/dashboard");
            })
    }

    const LoginForm = (
        <React.Fragment>
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
                                <Stack gap={3}>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                    <Button variant="secondary" href="/register">
                                        Register
                                    </Button>
                                </Stack>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )

    return (
        <div>
            {isAuthenticated() ? <Navigate to="/dashboard" /> : LoginForm}
        </div>
    )
}