import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const midPosition = [21.422487, 39.826206]

export default function MapScreen() {
    const ipSrc = localStorage.getItem("ipSrc");
    const ipDst = localStorage.getItem("ipDst");

    const [srcPosition, setSrcPosition] = useState([-7.250445, 112.768845]);
    const [dstPosition, setDstPosition] = useState([-7.250445, 112.768845]);

    const [srcLocation, setSrcLocation] = useState("Surabaya, Jawa Timur, Indonesia")
    const [dstLocation, setDstLocation] = useState("Surabaya, Jawa Timur, Indonesia")

    function getSrcPosition(ipSrc) {
        if (ipSrc.includes("192.168")) {
            console.log("dst local ip");
            setSrcPosition([-7.250445, 112.768845])
            return
        }

        console.log("query src position: ", ipSrc);
        fetch("http://0.0.0.0:8080/location", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "ipAddress": ipSrc })
        }).then((response) => {
            if (response.ok) { return response.json() };
        }).then((data) => {
            setSrcLocation(data.message.country);
            setSrcPosition([data.message.latitude, data.message.longitude])
        })
    }

    function getDstPosition(ipDst) {
        if (ipDst.includes("192.168")) {
            console.log("dst local ip");
            setDstPosition([-7.250445, 112.768845])
            return
        }
        console.log("query dst position: ", ipDst);
        fetch("http://0.0.0.0:8080/location", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "ipAddress": ipDst })
        }).then((response) => {
            console.log(response);
            if (response.ok) { return response.json() };
        }).then((data) => {
            setDstLocation(data.message.country);
            setDstPosition([data.message.latitude, data.message.longitude]);
        })
    }

    useEffect(() => {
        getSrcPosition(ipSrc);
        getDstPosition(ipDst);
    }, [ipSrc, ipDst]);

    return (
        <MapContainer center={midPosition} zoom={2} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={srcPosition}>
                <Popup>
                    Asal Aktivitas Jaringan
                    <br />
                    {srcLocation}
                </Popup>
            </Marker>
            <Marker position={dstPosition}>
                <Popup>
                    Tujuan Aktivitas Jaringan 
                    <br />
                    {dstLocation}
                </Popup>
            </Marker>
        </MapContainer>
    )
}