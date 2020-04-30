import {observable,action} from "mobx";

class CartModel{
           productId
           currencyFormat
           currencyId
           price
           title
           imageURL
           @observable quantity;
           
    constructor(item){
           this.productId=item.productId;
           this.currencyFormat=item.currencyFormat;
           this.currencyId=item.currencyId;
           this.price=item.price;
           this.title=item.title;
           this.imageURL=item.imageURL;
           this.quantity=item.quantity
    }
    
    @action.bound
    incrementQuantity(){
     this.quantity=this.quantity+1     
    }
}


export default CartModel;