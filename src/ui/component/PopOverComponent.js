import { Popover } from "react-bootstrap";


export default function PopOverComponent() {
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