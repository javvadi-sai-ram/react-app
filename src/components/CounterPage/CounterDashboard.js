import React from "react";
import {observable,action} from "mobx";  
import {observer} from 'mobx-react';
import tw from "tailwind.macro";
import styled from '@emotion/styled';

const IncrementButton=styled.button`${tw`border border-gray-400 p-4 bg-blue-600 text-white font-extrabold text-4xl m-4 w-16`}`;
const DecrementButton=styled.button`${tw`border border-gray-400 p-4 bg-blue-600 text-white font-extrabold text-4xl m-4 w-16`}`;
const Container=styled.div`${tw`flex justify-center items-center`}`
const CounterHeader=styled.div`${tw`flex justify-center items-center text-5xl font-bold`}`
const Counter=styled.div`${tw`flex justify-center items-center flex-col h-screen`}`

@observer
class CounterDashboard extends React.Component{
    @observable count=0;
    
    @action.bound
    OnIncrement(){
        this.count++
    }
    @action.bound
    OnDecrement(){
        this.count--
    }
    @action.bound
    onChange(event){
        this.count=event.target.value
    }
    render(){
        return(
            <Counter>
            <CounterHeader>Counter</CounterHeader>
            <Container>
            <IncrementButton onClick={this.OnIncrement}>+</IncrementButton>
            <input type="number" className="text-center border border-black h-16" onChange={this.onChange} value={this.count}></input>
            <DecrementButton onClick={this.OnDecrement}>-</DecrementButton>
            </Container>
            </Counter>
            );
    }
}

export default CounterDashboard;