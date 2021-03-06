import React from "react";

import {observer} from "mobx-react";

import authStore from "../../stores";
//import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure";
import {getAccessToken} from "../../utils/StorageUtils";
import {Redirect} from "react-router-dom";
import Loader from 'react-loader-spinner';
import {SignInFormEcommerce,SignIn,Password,Button,SignInComment,TotalSignIn,ErrorMessage} from "./styledComponent.js";

 


 const  DisplayMess=(props)=>{
      return <div>{props.children}</div>
    }
    
export const SignInButton=(props)=>{
    return(
    <Button onClick={props.getCookieValue} color={props.color} disabled={authStore.getUserSignInAPIStatus===100?true:false}>
            {props.getUserSignInAPIStatus===100?<Loader type="Oval" color="#00BFFF" height={25} width={25} />:"Sign In"}
            </Button>
            )
}

export const Inputs=(props)=>{
    return(
 <SignIn type={props.text} value={props.value} placeholder={props.placeholder} />   
 );
}



export const LoaderChange=(props)=>{
    return (<Loader type="Oval" color={props.color ?? "white"} height={props.height ?? 25} width={props.width ?? 25} />)
}

@observer
class SignInForm extends React.Component{
    userNameRef=React.createRef();
    passwordRef=React.createRef();
    componentDidMount(){
     this.userNameRef.current.focus()
    }
  
    render(){
        const {userName,password,onChangepasswords,onChangeuserNames,getCookieValue,redirectPager,errorMessage}=this.props
          return(
            <TotalSignIn>
            <SignInFormEcommerce>
            <SignInComment>Sign in</SignInComment>
            <SignIn ref={this.userNameRef} type="text" value={userName} onChange={onChangeuserNames}  placeholder=" UserName"/>
            <Password ref={this.passwordRef} type="password" value={password} onChange={onChangepasswords} placeholder="Password"/>
            <Button onClick={getCookieValue} disabled={authStore.getUserSignInAPIStatus===100?true:false}>
            {authStore.getUserSignInAPIStatus===100?<Loader type="Oval" color="#00BFFF" height={25} width={25} />:"Sign In"}
            </Button>
            {authStore.getUserSignInAPIStatus===200&&redirectPager()}       
            <ErrorMessage>{errorMessage}</ErrorMessage>
            </SignInFormEcommerce>
            <DisplayMess></DisplayMess>
            </TotalSignIn>   
            );
    }
}

export default SignInForm;


