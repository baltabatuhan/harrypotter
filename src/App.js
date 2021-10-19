
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";








function App() {
  const [quote, setQuote] = useState()
  const [character, setCharacter] = useState();


  useEffect(() => {

    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then((response) =>
        console.log(response.data, "zaza")
      )

      .catch((error) => console.log({ error }));
  }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
