import "./App.css";
import CardCharacter from "./components/CardCharacter";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weapons from "./components/Weapons";
import Maps from "./components/Maps";


function App() {






  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={CardCharacter} />
        <Route exact path="/weapons" component={Weapons} />
        <Route exact path="/maps" component={Maps} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
