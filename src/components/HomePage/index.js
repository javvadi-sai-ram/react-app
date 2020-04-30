import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import {Redirect} from "react-router-dom";
import {getAccessToken} from "../../utils/StorageUtils"





class App extends React.Component{
  
  
  gotoGridScreenIfLoggedIn=()=>{
    return (
      <Redirect
      to={{
        pathname:"/GridGameApp"
      }}
      />
      );
  }

  

render(){
  const token=getAccessToken()
     if(token==="12345"){
      return this.gotoGridScreenIfLoggedIn();
  }
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
        <Link to="/SignInForm">E-commerceApp</Link>
        <Link to="/LoginPage">LoginPage App</Link>
        <Link to="/countrydashBoardApp">Country App</Link>
        <Link to="/emozi-game">Emoji App</Link>
        <Link to="/counter-game">Counter App</Link>
        <Link to="/todo">Todos App</Link>
        <Link to="/EventList">Event App</Link>
        <Link to="/GridGameApp">GridGame App</Link>
        <Link to="/userPage">UsersPage App</Link>
        <Link to="/TodoNetWork">TodoNetWork App</Link>
        
      </header>
    </div>
  );
}
}

export default App;
