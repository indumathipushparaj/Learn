import "./styles.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
