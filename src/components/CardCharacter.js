import { Card, Layout } from "antd";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import axios from "axios";
import "./styles.scss";

function CardCharacter() {
  const [characters, setCharacters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
            smallImage: character.displayIcon,
            abilities: character.abilities,
            role: character.role,
          }))
        )
      )

      .catch((error) => console.log({ error }));
  }, []);

  const newCharacter = characters.filter((check) => check.image !== null);
  return (
    <Layout className="height-100">
      <div
        className="charactersCard"
        style={{
          justifyContent: "center",
        }}
      >
        {newCharacter.map((characters) => {
          return (
            <Card
              className="card"
              hoverable
              style={{
                width: 200,
                margin: "15px",
                textAlign: "center",
              }}
              cover={<img alt={characters.name} src={characters.image} />}
              onClick={() => {
                setSelected(characters);
                togglePopup();
              }}
            >
              {isOpen && (
                <Popup
                  content={
                    <>
                      <h1>
                        {selected.name} ({selected.role.displayName})
                      </h1>
                      <img alt={selected.name} src={selected.smallImage} />
                      <p>{selected.description}</p>
                      <h1>Abilities</h1>
                      <h1>{selected.abilities[0].displayName}</h1>
                      <p>{selected.abilities[0].description}</p>
                      <h1>{selected.abilities[1].displayName}</h1>
                      <p>{selected.abilities[1].description}</p>
                      <h1>{selected.abilities[2].displayName}</h1>
                      <p>{selected.abilities[2].description}</p>
                      <h1>{selected.abilities[3].displayName}</h1>
                      <p>{selected.abilities[3].description}</p>

                      <button>Close</button>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
              <h1 style={{ color: "#3D0000" }}>{characters.name}</h1>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
}

export default CardCharacter;
