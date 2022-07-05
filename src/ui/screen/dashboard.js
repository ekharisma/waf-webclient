import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardComponent from "../component/CardComponent";
import NavbarComponent from "../component/NavbarComponent";

export default function DashboardScreen() {
    const dd = getDate();
    const mm = getMonth();
    const yyyy = getYear();
    const fullDate = `${dd}/${mm}/${yyyy}`;
    let index = 0;
    const navigate = useNavigate();

    const [networkActivities, setNetworkActivities] = useState([]);

    function getNetworkActivity(limit) {
        try {
            fetch(`http://0.0.0.0:8080/activity/${limit}`)
                .then((response) => {
                    if (response.ok) { return response.json() };
                })
                .then((data) => {
                    setNetworkActivities(data.message);
                })
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getNetworkActivity(10);
    }, []);

    function navigateToMap(ipSrc, ipDst) {
        console.log(`Connection ${ipSrc} ---> ${ipDst}`);
        localStorage.setItem("ipSrc", ipSrc);
        localStorage.setItem("ipDst", ipDst);
        navigate("/map")
    }

    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Container fluid>
                <Row>
                    <Col>
                        <CardComponent
                            headerName={"Report Per Hari"} titleValue={fullDate}
                            text={"daily"}
                        />
                    </Col>
                    <Col>
                        <CardComponent
                            headerName={"Report Per Bulan"} titleValue={mm}
                            text={"monthly"}
                        />
                    </Col>
                    <Col>
                        <CardComponent
                            headerName={"Report Per Tahun"} titleValue={yyyy}
                            text={"yearly"}
                        />
                    </Col>
                </Row>
                <Container fluid>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>IP Asal</th>
                                <th>IP Tujuan</th>
                                <th>Nama Aktivitas</th>
                                <th>Peta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                networkActivities.map((el) => (
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{el.timestamp}</td>
                                        <td>{el.ipSrc}</td>
                                        <td>{el.ipDst}</td>
                                        <td>{el.networkActivityName}</td>
                                        <td>
                                            <Button variant="primary" onClick={() => navigateToMap(el.ipSrc, el.ipDst)}>
                                                Buka Peta
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </Container>
        </div>
    )
}


function getDate() {
    const date = new Date();
    return String(date.getDate()).padStart(2, '0');
}

function getMonth() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    return months[date.getMonth()]
}

function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
}