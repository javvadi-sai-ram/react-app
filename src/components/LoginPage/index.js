import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import {Redirect,withRouter} from "react-router-dom";
import {observable,action} from "mobx"
import {observer} from "mobx-react";
import {setAccessToken,clearUserSession} from "../../utils/StorageUtils"


const LoginPageDiv=styled.div`${tw`flex justify-center items-center flex-col h-screen`}`
const UserName=styled.input`${tw`border border-black w-36 h-10 m-3`}`;
const Password=styled.input`${tw`border border-black w-36 h-10`}`;
const LoginButton=styled.input`${tw`border border-black text-black m-3 w-24 p-2 bg-blue-400`}`;

@observer
class LoginPage extends React.Component{
        
    
  
    isClickedMethod=()=>{
        setAccessToken(12345)
       this.props.history.replace("/");
       
    }
    componentWillUnmount(){
        return clearUserSession();
    }
    
    render(){
        return(
            <LoginPageDiv>
            <UserName type="text" id="UserName" name="UserName" placeholder="UserName"></UserName>
            <Password type="password" id="Password" name="Password" placeholder="Password"></Password>
            <LoginButton type="button" value="SUBMIT" name="Submit" onClick={this.isClickedMethod}></LoginButton>
            </LoginPageDiv>
            )
            
    }
}


export default withRouter(LoginPage);
