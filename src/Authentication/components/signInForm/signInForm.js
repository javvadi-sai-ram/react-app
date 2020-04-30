import React from "react";
import tw from "tailwind.macro";
import styled from '@emotion/styled';
import {observer} from "mobx-react";
import {observable,action} from "mobx";
import authStore from "../../stores";
//import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure";
import {getAccessToken} from "../../utils/StorageUtils";
import {Redirect} from "react-router-dom";
import Loader from 'react-loader-spinner';



const SignInFormEcommerce=styled.div`${tw`flex justify-center items-center flex-col p-3 border bg-white`}`;
const SignIn=styled.input`${tw`border border-gray-400 h-10 m-2 w-48`}`;
const Password=styled.input`${tw`border border-gray-400 h-10 m-2 w-48`}`;
const Button=styled.button`${tw`border border-black h-10 m-2 flex justify-center w-48 bg-black text-white`}`;
const SignInComment=styled.div`${tw`self-start pl-4 mt-2 mb-2 font-semibold`}`;
const TotalSignIn=styled.div`${tw`flex justify-center items-center h-screen bg-gray-200`}`;
const ErrorMessage=styled.div`${tw`text-red-600`}`;

@observer
class SignInForm extends React.Component{
    @observable iscompleted=true
    @observable userName;
    @observable password;
    @observable errorMessage;
    constructor(){
        super();
        this.userName="";
        this.password="";
        this.errorMessage="";
        this.getCookieValue=this.getCookieValue.bind(this);
    }
    
    
    
    userNames=(event)=>{
        this.userName=event.target.value;
    }
    
    passwords=(event)=>{
        this.password=event.target.value;
    }
    
    getToken=()=>{
        authStore.userSignIn();
    }
    
    
    
     authPage=()=>{
        let a=getAccessToken()
        
    }
    
    @action.bound
     async getCookieValue(){
      if(this.userName!==""&&this.password!==""){
           this.getToken()

      }
      if(this.userName===""){
          this.errorMessage="please enter userName"
      }
      if(this.password===""){
          this.errorMessage="please enter password"
      }
      if(!window.navigator.onLine){
          this.errorMessage="Network error"
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
            const {history}=this.props;
            return (
            <Redirect
                         to={{
                          pathname:"/SignInForm"
                             }}
                         />
                  );
        }
        
    }
    
    renderSignInForm=()=>{
    }
   
    render(){
          return(
            <TotalSignIn>
            <SignInFormEcommerce>
            <SignInComment>Sign in</SignInComment>
            <SignIn type="text" value={this.userName} onChange={this.userNames} placeholder="UserName"/>
            <Password type="password" value={this.password} onChange={this.passwords} placeholder="Password"/>
            <Button onClick={this.getCookieValue}>
            {authStore.getUserSignInAPIStatus===100?<Loader type="Oval" color="#00BFFF" height={25} width={25} />:"Sign In"}
            </Button>
            {authStore.getUserSignInAPIStatus===200&&this.redirectPager()}
            <ErrorMessage>{this.errorMessage}</ErrorMessage>
            </SignInFormEcommerce>
            </TotalSignIn>
            );
    }
}

export default SignInForm;


