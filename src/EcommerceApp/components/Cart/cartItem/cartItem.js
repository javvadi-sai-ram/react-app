import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import {observable} from "mobx";
import {observer,inject} from "mobx-react";

const EachShoppingItem=styled.div`${tw`flex  w-2/5`}
`;
const Image=styled.img`${tw`h-20 w-20 m-1`}`;
const Title=styled.div`${tw`text-xs`}`;
const Price=styled.div`${tw`text-sm text-yellow-800 pr-4`}`;
const ImageDetails=styled.div`${tw`flex `}`;
const Quantity=styled.div`${tw`text-sm`}`
const TotalCart=styled.div`${tw`flex justify-between border-white border-t-2 pt-2 pb-2`}`;
const DeleteCart=styled.div`${tw`border border-white flex justify-center`}`

@inject('cartStore')
class CartItem extends React.Component{
    
    deleteCartItem=()=>{
        const {eachItem}=this.props;
        this.props.cartStore.onRemoveCartItem(eachItem);
    }

    renderEachCartItem=()=>{
         const {eachItem}=this.props;
        return(
            <TotalCart>
               <ImageDetails>
                 <div>
                 <Image src={eachItem.imageURL}/>
                 </div>
                 <div>
                     <Title>{eachItem.title}</Title>
                     <Quantity >Quantity-{eachItem.quantity}</Quantity>
                 </div>
                </ImageDetails>
                <div>
                    <DeleteCart onClick={this.deleteCartItem}>
                        X
                     </DeleteCart>
                     <div>
                        <Price><span>{eachItem.currencyFormat}</span>{eachItem.price}</Price>
                     </div>
                </div>
            </TotalCart>
        );
    }
    
    render(){
        return(
            this.renderEachCartItem()
            )
    }
}


export default CartItem;





/*<TotalCart>
        <EachShoppingItem>
            <div>
           <Image src={eachItem.imageURL}/>
           </div>
             <Details>
             <Price><span>{eachItem.currencyFormat}</span>{eachItem.price}</Price>
                        <Title>{eachItem.title}</Title>
                        <Price><span>{eachItem.currencyFormat}</span>{eachItem.price}</Price>
                        
           </Details>
        </EachShoppingItem>
        <div>
        X
        </div>
    </TotalCart>*/