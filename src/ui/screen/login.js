import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function LoginScreen() {
    return (
        <Container className="d-flex vh-100">
            <Row className="m-auto">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Form className="m-3 text-center">
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="input username" autoComplete="false"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="input password" autoComplete="false"></Form.Control>
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
    )
}