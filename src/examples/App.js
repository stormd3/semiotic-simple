import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import BarChart from "./BarChart";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ width: "100%", height: "100%" }}>
          <header>
            <Link to="/">Home</Link>
            {` `}
            <Link to="/bar">BarChart</Link>
            {` `}
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/bar" component={BarChart} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
