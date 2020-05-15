import React from "react";
import {SignInRoute} from "./signInRouter";
import {Route} from "react-router-dom";
import {SIGN_IN_PATH} from "../constants/APIConstants";



const routes = [
    <Route exact path={SIGN_IN_PATH} key={SIGN_IN_PATH} component={SignInRoute} />
];


export default routes;