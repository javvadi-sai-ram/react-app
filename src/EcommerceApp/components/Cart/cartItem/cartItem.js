import React from "react";

import {observer,inject} from "mobx-react";

import {Image,Title,Price,ImageDetails,Quantity,TotalCart,DeleteCart} from "./styledComponent.js";

//@inject('cartStore')
@observer
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