import "./App.css";
import CardCharacter from "./components/CardCharacter";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {






  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={CardCharacter} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
