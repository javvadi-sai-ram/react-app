import React from "react";
import SignInForm from "../components/signInForm";
import {Route,Redirect} from "react-router-dom";
//import {SIGN_IN_PATH} from "../constants/APIConstants";
import {observable,action} from "mobx";
import {observer,inject} from "mobx-react";
import {getAccessToken} from "../utils/StorageUtils";
import authStore from "../stores";


@observer
class SignInRoute extends React.Component{
     @observable iscompleted=true
    @observable userName;
    @observable password;
    @observable errorMessage;
    
    
    SignInFormRef=React.createRef();
    
    constructor(){
        super();
        this.userName="";
        this.password="";
        this.errorMessage="";
        this.getCookieValue=this.getCookieValue.bind(this);
    }
    
    
    
    onChangeuserNames=(event)=>{
        this.userName=event.target.value;
    }
    
    onChangepasswords=(event)=>{
        this.password=event.target.value;
    }
    
    getToken=()=>{
        authStore.userSignIn();
    }
    
    
    
     
    
    @action.bound
     async getCookieValue(){
         event.preventDefault()
      if((this.userName!==""||this.userName===undefined)&&(this.password!==""||this.password===undefined)){
          this.errorMessage="";
           this.getToken();

      }
       
      if(this.userName===""||this.userName===undefined){
          this.errorMessage="Please enter username";
          this.SignInFormRef.current.userNameRef.current.focus()

      }
      else if(this.password===""||this.password===undefined){
          this.SignInFormRef.current.passwordRef.current.focus()
          this.errorMessage="Please enter password";
          
      }
      
      if(!window.navigator.onLine){
          this.errorMessage="Network error";
      }
      
    }
    
    redirectPager=()=>{
        let a=getAccessToken();
        if(a!==undefined){
             return (
                 <Redirect
                         to={{
                          pathname:"/ProductPage"
                             }}
                         />
                  );
        }
        else{
            //const {history}=this.props;
            return (
            <Redirect
                         to={{
                          pathname:"/SignIn"
                             }}
                         />
                  );
        }
             
    }
    
    
    render(){       
        return(
            <SignInForm
            
            iscompleted={this.iscompleted}
            userName={this.userName}
            password={this.password}
            errorMessage={this.errorMessage}
            onChangepasswords={this.onChangepasswords}
            onChangeuserNames={this.onChangeuserNames}
            redirectPager={this.redirectPager}    
            getCookieValue={this.getCookieValue}
            ref={this.SignInFormRef}
            />
            );
    }
}

export {SignInRoute};

/*const routes = [
 
  <Route path={SIGN_IN_PATH} key={SIGN_IN_PATH} component={SignInForm} />
];


export default routes; */