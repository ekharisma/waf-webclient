import {Col, Container, OverlayTrigger, Popover, Row, Table } from "react-bootstrap";
import { Easel2} from "react-bootstrap-icons";
import CardComponent from "../component/CardComponent";
import NavbarComponent from "../component/NavbarComponent";

export default function DashboardScreen() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = months[date.getMonth()]
    const yyyy = date.getFullYear();
    const fullDate = `${dd}/${mm}/${yyyy}`
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Container fluid>
                <Row>
                    <Col>
                        <CardComponent
                            headerName={"Report Per Hari"} titleValue={fullDate}
                            text={10}
                        />
                    </Col>
                    <Col>
                        <CardComponent
                            headerName={"Report Per Bulan"} titleValue={mm}
                            text={10}
                        />
                    </Col>
                    <Col>
                        <CardComponent
                            headerName={"Report Per Tahun"} titleValue={yyyy}
                            text={10}
                        />
                    </Col>
                </Row>

                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Timestamp</th>
                            <th>IP Asal</th>
                            <th>IP Tujuan</th>
                            <th>Nama Aktivitas</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popOver()}>
                                    <Easel2 className="m-1" />
                                </OverlayTrigger>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

function popOver() {
    return (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Detail Aktivitas</Popover.Header>
            <Popover.Body>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </Popover.Body>
        </Popover>
    );

}