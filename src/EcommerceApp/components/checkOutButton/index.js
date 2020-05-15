import React from "react";

import {observer,inject} from "mobx-react";

import {CheckOutButtons} from "./styledComponent.js";

//@inject('cartStore')
@observer
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