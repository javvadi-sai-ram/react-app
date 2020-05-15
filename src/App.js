import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import {CountrydashBoardApp} from "./components/countryData/countrydashBoardApp.js";
import CountryCard from "./components/countryData/countryCard.js";
import TodoList from './components/modtodolist/todolist';
import EmojiGame from "./components/EmojiGame/EmojiGame/EmojiGame.js";
import CounterPage from "./components/CounterPage/index";
import MCQBITS from "./components/MCQBITS";
import CounterDashboard from "./components/CounterPage/CounterDashboard.js";
import EventApp from "./components/EventList/EventApp";
import "./App.css";
import themeStore from "./stores/ThemeStore/themeStore";
import GridMemoryGame from "./components/GridGame/GridMemory/index";
import {observer,Provider} from "mobx-react";
import UsersPage from "./components/userPage/index";
import stores from "./stores";
import TodoListNetWork from "./components/todolistNetwork/todolistNet";
import LoginPage from "./components/LoginPage";
import routes from "./Authentication/routes/routers.js";
import ProductRouter from "./EcommerceApp/routes/ProductRouter";
import productStore from "./EcommerceApp/stores";

@observer
class App extends React.Component{
  
  getCurrentTheme=()=>{
    return themeStore.boolForColorMode;
  }
  
  lightMode=(theme)=>{
   themeStore.updateTheme(theme);
  }
  
   
  render(){
  return (
    <Provider {...stores} {...productStore} >
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      {routes}
      {ProductRouter}
      <Route exact path="/counter-page">
          <Page1 />
        </Route>
        <Route exact path="/MCQBITS">
          <MCQBITS />
        </Route>
            <Route exact path="/page-1">
          <Page1 />
        </Route>
        
        <Route path="/countrydashBoardApp">
            <CountrydashBoardApp lightMode={this.lightMode} boolForColorMode={this.getCurrentTheme()} />
          </Route>
          <Route path="/GridGameApp">
            <GridMemoryGame lightMode={this.lightMode} boolForColorMode={this.getCurrentTheme()}/>
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
            <TodoList />
          </Route>
          <Route path="/EventList">
            <EventApp />
          </Route>
          <Route path="/userPage" component={UsersPage}/>
          <Route path="/TodoNetWork" component={TodoListNetWork}/>
          <Route exact path="/LoginPage"component={LoginPage}/>
        
      <Route exact path="/">
            <HomePage />
          </Route>
      </Switch>
    </Router>
    </Provider>
  );
}
}


export default App;


