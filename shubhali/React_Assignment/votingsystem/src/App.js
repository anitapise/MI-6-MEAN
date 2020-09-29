import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import {Activity1} from "./Activity1";
import Hello from "./Hello";
import {Activity3} from "./Activity3";
import Activity4 from "./Activity4";
import Activity5 from "./Activity5";
import Activity6 from "./Activity6";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <div id="main">
          <nav>
            <ul role="nav">
              <li>
                <Link to="/Activity1">Activity1</Link>
              </li>
              <li>
                <Link to="/Hello">Activity2</Link>
              </li>
              <li>
                <Link to="/Activity3">Activity3</Link>
              </li>
              <li>
                <Link to="/Activity4">Activity4</Link>
              </li>
              <li>
                <Link to="/Activity5">Activity5</Link>
              </li>
              <li>
                <Link to="/Activity6">Activity6</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Route path="/Activity1" component={Activity1} />
            <Route path="/Activity5" component={Activity5} />
            <Route path="/Activity6" component={Activity6} />
            <Route path="/Activity4" component={Activity4} />
            <Route path="/Activity3" component={Activity3} />
            <Route path="/Hello" component={Hello} />
          </div>
        </div>
      </Router>
    </>
  );
};
export default App;
