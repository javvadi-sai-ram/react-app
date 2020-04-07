import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Greetings} from "./greetings.js"
import {FavouriteDessert} from "./favorDesert.js"
import {CheckboxWithLabel} from "./checkboxCities.js"
import {YourState} from "./YourState.js";
import {DisableButton} from "./DisableButton.js"
const stateList=["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]
export default function AllComponents() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="ul-Tag">
            <li>
              <Link to="/Greetings">greetings App</Link>
            </li>
            <li>
              <Link to="/favourateDesert">favourateDesert App</Link>
            </li>
            <li>
              <Link to="/visitedCities">visitedCities App</Link>
            </li>
            <li>
              <Link to="/YourState">YourState App</Link>
            </li>
            <li>
              <Link to="/disableButton">disableButton App</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         <Route path="/Greetings">
            <Greetings />
          </Route>
          <Route path="/favourateDesert">
            <FavouriteDessert />
          </Route>
          <Route path="/visitedCities">
            <CheckboxWithLabel />
          </Route>
          <Route path="/YourState">
            <YourState statelist={stateList}/>
          </Route>
          <Route path="/disableButton">
            <DisableButton/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export{AllComponents}