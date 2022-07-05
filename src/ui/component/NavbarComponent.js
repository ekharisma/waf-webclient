import { Button, Nav, Navbar } from "react-bootstrap";
import { unsetToken } from "../../data/localStorage";
import logo from "../../resources/logo.png"

export default function NavbarComponent() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="m-1">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo PENS" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/credit">Credit</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <Button className="m-1" variant="danger" href="/login" onClick={unsetToken}>
                    Logout
                </Button>
            </Nav>
        </Navbar>
    )
}