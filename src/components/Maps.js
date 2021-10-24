import { Card } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

function Maps() {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        axios
            .get("https://valorant-api.com/v1/maps")
            .then((response) =>
                setMaps(
                    response.data.data.map((maps) => ({
                        ...maps,
                        name: maps.displayName,

                        image: maps.splash,
                    }))
                )
            )

            .catch((error) => console.log({ error }));
    }, []);

    return (
        <div className="maps" style={{ backgroundColor: "#000000" }}>
            {maps.map((maps) => {
                return (
                    <Card
                        className="card"
                        hoverable
                        style={{
                            width: 240,
                            margin: "15px",
                            textAlign: "center",
                            backgroundColor: "#000000",
                        }}
                        cover={<img alt={maps.name} src={maps.image} />}
                    >
                        <h1 style={{ color: "#3D0000" }}>{maps.name}</h1>
                    </Card>
                );
            })}
        </div>
    );
}

export default Maps;
