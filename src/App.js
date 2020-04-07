import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";


import {CountrydashBoardApp} from "./components/countryData/countrydashBoardApp.js";
import CountryCard from "./components/countryData/countryCard.js";
import EmojiGame from "./components/EmojiGame/EmojiGame/EmojiGame.js";


 

import "./App.css";

class App extends React.Component{
  state={
    boolForColorMode:true
  }
  
   lightMode=(event)=>{
       if(this.state.boolForColorMode){
       this.setState({boolForColorMode:false});}
       if(!this.state.boolForColorMode){
       this.setState({boolForColorMode:true});}
   }
  
  
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
            <Route exact path="/page-1">
          <Page1 />
        </Route>
        
        <Route path="/countrydashBoardApp">
            <CountrydashBoardApp lightMode={this.lightMode} boolForColorMode={this.state.boolForColorMode}/>
          </Route>
          
          <Route path="/goToCountryCard">
            <CountryCard lightMode={this.lightMode} boolForColorMode={this.state.boolForColorMode}/>
          </Route>
          <Route path="/emozi-game">
            <EmojiGame/>
          </Route>
          
      <Route exact path="/">
            <HomePage />
          </Route>
      </Switch>
    </Router>
  );
};
}


export default App;
