import {observable,action} from "mobx";
import {API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from "@ib/mobx-promise";
import {setAccessToken} from "../../utils/StorageUtils";
import {clearUserSession} from "../../../EcommerceApp/utils/StorageUtils.js";


class AuthStore{
    
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    authAPIService;
    authAPI;
    
    constructor(authAPIService){
        this.init();
        this.authAPIService=authAPIService;
    }
    
    init(){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
        this.authAPI=[];    
    }
    
    
  @action.bound
    setUserSignInAPIResponse(AuthResponse){
        setAccessToken(AuthResponse[0].access_token);
        this.authAPI=AuthResponse;
    }
  
  @action.bound    
    setUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }
  
  @action.bound  
    setUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    
    
    
  @action.bound
    userSignIn(){
        
        const AuthPromise=this.authAPIService.signInAPI();
        return bindPromiseWithOnSuccess(AuthPromise)
        .to(this.setUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.setUserSignInAPIError);
    }
    
    
    
    userSignOut(){
        alert()
        clearUserSession();
    }
}


export default AuthStore;