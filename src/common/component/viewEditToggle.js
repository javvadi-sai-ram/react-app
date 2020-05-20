import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import WithToggle from "../hocs/withToggle";
import {observer} from "mobx-react";
import {observable,action} from "mobx";
const Togglebar=styled.div`${tw`m-5`}`;
const ToogleButton=styled.button`${tw`bg-blue-400 p-1`}`;
const InputText=styled.input`${tw`border border-blue-400`}
`

@observer
class ViewEditToggle extends React.Component{
    @observable inputText="Click on the edit button to start editing";
    
    @action.bound
    onChangeToggle(event){
        this.inputText=event.target.value
    }
    render(){
        const {toggleStatus}=this.props
        return (
            <Togglebar>
            <div>
            {toggleStatus?
            <InputText type="text" 
            value={this.inputText} 
            onChange={this.onChangeToggle}
            />:
            this.inputText}
            <ToogleButton onClick={this.props.onToggle}>{toggleStatus?"Cancel":"Edit"}</ToogleButton>
            </div>
            </Togglebar>
            )
    }
}

export default WithToggle(ViewEditToggle);