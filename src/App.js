import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Barra from "./componentes/Barra";
import Home from "./componentes/Home";
import Logo from "./componentes/Logo";
import Nosotros from "./componentes/Nosotros";
import Pie from "./componentes/Pie";

function App() {
  return (
    <Router>
      <Logo />
      <Barra />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route path="/home" exact component={Home} />
      <Route path="/nosotros" exact component={Nosotros} />

      <Pie />
    </Router>
  );
}

export default App;
