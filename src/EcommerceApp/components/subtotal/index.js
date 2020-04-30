import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import CheckOutButton from "../checkOutButton"

const SubTotalAndAmount=styled.div`${tw`flex justify-between`}`
const SubTotals=styled.div`${tw`text-yellow-800`}`;
const Amount=styled.div`${tw``}`;
const CheckoutButtons=styled.div`${tw`flex justify-center`}`

class SubTotal extends React.Component{
    render(){
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
                <CheckOutButton amount={this.props.cartStoreAmount}/>
            </CheckoutButtons>
        </div>
            );
    }
}

export default SubTotal;