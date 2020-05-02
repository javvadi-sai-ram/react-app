import React from "react";
import SignInForm from "../components/signInForm";
import {Route} from "react-router-dom";
import {SIGN_IN_PATH} from "../constants/APIConstants";


const routes = [
 
  <Route path={SIGN_IN_PATH} key={SIGN_IN_PATH} component={SignInForm} />
];


export default routes;