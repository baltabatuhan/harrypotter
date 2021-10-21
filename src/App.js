import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    axios
      .get("http://hp-api.herokuapp.com/api/characters")
      .then((response) =>
        setCharacters(
          response.data.map((character) => ({
            characters: [],
            name: character.name,
            gender: character.gender,
            house: character.house,
            birth: character.birth,
            wand: character.wand,
            patronus: character.patronus,
            hogwartsStudent: character.hogwartsStudent,
            hogwartsStaff: character.hogwartsStaff,
            ancestry: character.ancestry,
            species: character.species,
            image: character.image,
          }))
        )
      )

      .catch((error) => console.log({ error }));
  }, []);

  if (characters.length === 0) {
    return <div>loading...</div>;
  }
  console.log(characters.species, "zaza");


  return (
    <div className="App">
      <p>{characters.species}</p>
    </div>
  );
}

export default App;
