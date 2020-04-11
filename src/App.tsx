import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";


import {CountrydashBoardApp} from "./components/countryData/countrydashBoardApp.js";
import CountryCard from "./components/countryData/countryCard.js";
import Todo from './components/modtodolist/todolist.js';
import EmojiGame from "./components/EmojiGame/EmojiGame/EmojiGame.js";
import CounterPage from "./components/CounterPage/index.js";
import CounterDashboard from "./components/CounterPage/CounterDashboard.js";
import EventApp from "./components/EventList/EventApp.js";
import "./App.css";


import {observable} from "mobx";  
import {observer} from 'mobx-react';

import themeStore from "./stores/ThemeStore/themeStore.js";

//configure({ enforceActions:true});

@observer
class App extends React.Component{
 // @observable boolForColorMode=true
  
  getCurrentTheme=()=>{
    return themeStore.boolForColorMode;
  }
  
  lightMode=(theme)=>{
   themeStore.updateTheme(theme);
  }
  
   /*lightMode=(event)=>{
       if(this.state.boolForColorMode){
       this.setState({boolForColorMode:false});}
       if(!this.state.boolForColorMode){
       this.setState({boolForColorMode:true});}
   }*/
  /*lightMode=(event)=>{
       if(this.getCurrentTheme()){
             this.setCurrentTheme(false);}
       else{
           this.setCurrentTheme(true);}
  }*/
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/counter-page">
          <CounterPage />
        </Route>
        
            <Route exact path="/page-1">
          <Page1 />
        </Route>
        
        <Route path="/countrydashBoardApp">
            <CountrydashBoardApp lightMode={this.lightMode} boolForColorMode={this.getCurrentTheme()} />
          </Route>
          
          <Route path="/goToCountryCard">
            <CountryCard lightMode={this.lightMode} boolForColorMode={this.getCurrentTheme()}/>
          </Route>
          <Route path="/emozi-game">
            <EmojiGame/>
          </Route>
          <Route path="/counter-game">
            <CounterDashboard/>
          </Route>
           <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/EventList">
            <EventApp />
          </Route>
          
      <Route exact path="/">
            <HomePage />
          </Route>
      </Switch>
    </Router>
  );
}
}


export default App;


