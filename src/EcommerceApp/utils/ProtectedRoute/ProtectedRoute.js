import React from "react";
import {Route,Redirect} from "react-router-dom"
import {getAccessToken} from '../StorageUtils.js';
import {PRODUCTPAGE_PATH} from "../../constants/APIConstants"
import {SIGN_IN_PATH} from "../../../Authentication/constants/APIConstants.js"


const ProtectedRoute =({ component : Component,...rest})=> {
    
    
    if(getAccessToken()!==undefined){
        return <Route exact path={rest.path} component={Component}/>
    }
    else
    {
       return <Redirect to={SIGN_IN_PATH}/>
    }
    
}
        

export default ProtectedRoute