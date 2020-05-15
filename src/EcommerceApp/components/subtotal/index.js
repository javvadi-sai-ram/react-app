import React from "react";

import CheckOutButton from "../checkOutButton";
import {SubTotalAndAmount,SubTotals,Amount,CheckoutButtons} from "./styledComponent.js";

class SubTotal extends React.Component{
    render(){
        const {cartStore}=this.props
        return(
        <div>    
            <SubTotalAndAmount>
            <SubTotals>
            SubTotal
            </SubTotals>
            <Amount>
              {this.props.cartStoreAmount}
              </Amount>
            </SubTotalAndAmount>
            <CheckoutButtons>
                <CheckOutButton cartStore={cartStore} amount={this.props.cartStoreAmount}/>
            </CheckoutButtons>
        </div>
            );
    }
}

export default SubTotal;