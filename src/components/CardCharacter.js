import { Card } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function CardCharacter() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get("https://valorant-api.com/v1/agents")
            .then((response) =>
                setCharacters(
                    response.data.data.map((character) => ({
                        ...characters,
                        name: character.displayName,
                        description: character.description,
                        image: character.fullPortrait,
                    }))
                )
            )

            .catch((error) => console.log({ error }));
    }, []);

    const newCharacter = characters.filter(
        (check) =>
            check.image !== null

    );
    return (
        <div className="charactersCard" style={{ backgroundColor: "#000000" }}>
            {newCharacter.map((characters) => {
                return (
                    <Card
                        className="card"
                        hoverable
                        style={{ width: 240, margin: "15px", textAlign: "center", backgroundColor: "#000000" }}
                        cover={<img alt={characters.name} src={characters.image} />}

                    >
                        <h1 style={{ color: "#3D0000" }}>{characters.name}</h1>
                    </Card>
                );
            })}
        </div>
    );
}

export default CardCharacter;
