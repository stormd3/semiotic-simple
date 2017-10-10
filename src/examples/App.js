import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import BarChart from "./BarChart";
import LineBrush from "./LineBrush";

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
            <Link to="/linebrush">Line Brush</Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/bar" component={BarChart} />
            <Route exact path="/linebrush" component={LineBrush} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
