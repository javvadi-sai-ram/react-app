import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/page-1">Page 1</Link>
        <Link to="/countrydashBoardApp">Country App</Link>
        <Link to="/emozi-game">Emoji App</Link>
        <Link to="/counter-game">Counter App</Link>
        <Link to="/todo">Todos App</Link>
        <Link to="/EventList">Event App</Link>
        <Link to="/GridGameApp">GridGame App</Link>
      </header>
    </div>
  );
}

export default App;
