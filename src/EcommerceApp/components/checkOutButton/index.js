import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import {observer,inject} from "mobx-react";

const CheckOutButtons=styled.input`${tw`border border-white w-32 p-4 m-2 text-center`}`

@inject('cartStore')
class CheckOutButton extends React.Component{
    onCheckOut=()=>{
        this.props.cartStore.clearCart();
    }
    
    render(){
        return(
            <div>
            <CheckOutButtons onClick={this.onCheckOut} type="button" value="CHECKOUT" disabled={this.props.amount<1?true:false}/>
            </div>
            )
    }
}

export default CheckOutButton;