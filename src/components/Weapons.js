import { Card } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

function Weapons() {
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        axios
            .get("https://valorant-api.com/v1/weapons")
            .then((response) =>
                setWeapons(
                    response.data.data.map((weapons) => ({
                        ...weapons,
                        name: weapons.displayName,
                        magazineSize: weapons.magazineSize,
                        image: weapons.displayIcon,

                    }))
                )
            )

            .catch((error) => console.log({ error }));
    }, []);
    console.log(weapons);
    return (
        <div className="weapons" style={{ backgroundColor: "#000000" }}>
            {weapons.map((weapons) => {
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
                        cover={<img alt={weapons.name} src={weapons.image} />}
                    >
                        <h1 style={{ color: "#3D0000" }}>{weapons.name}</h1>
                    </Card>
                );
            })}
        </div>
    );
}

export default Weapons;
