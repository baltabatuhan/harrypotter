import { Layout } from "antd";

import { Route, Switch } from "react-router-dom";
import CardCharacter from "./components/CardCharacter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weapons from "./components/Weapons";
import Maps from "./components/Maps";

function App() {
  return (
    <Layout className="height-100">
      <Header />
      <Switch>
        <Route exact path="/" component={CardCharacter} />
        <Route exact path="/weapons" component={Weapons} />
        <Route exact path="/maps" component={Maps} />
      </Switch>
      <Footer />
    </Layout>
  );
}

export default App;
