import {observable,computed,action} from "mobx";
import CartModel  from "./cartModel";
 
 
 class CartStore{
    @observable cartProductList;
    @observable count=0
    
    constructor(){
     this.init();
    }
    
    @action.bound
    init(){
     this.cartProductList=[];
    }
    

    @action.bound
    onClickAddToCart(item){
          let cartProducts=this.cartProductList.slice(0);
          let FindObject=this.cartProductList.find(each=>item.productId===each.productId);
          if(FindObject===undefined){
           const cartModel=new CartModel({
           productId:item.productId,
           count:this.count++,
           currencyFormat:item.currencyFormat,
           currencyId:item.currencyId,
           price:item.price,
           title:item.title,
           imageURL:item.imageURL,
           quantity:1 
           });
          cartProducts.push(cartModel);
          }
          else{
              FindObject.incrementQuantity();
          }
 
          this.cartProductList=cartProducts;
    }
    
    onRemoveCartItem(each){
     let cartList=this.cartProductList.slice(0);
       let list=cartList.filter(item=>each.productId!==item.productId);
        this.cartProductList=list;
    }
    
    clearCart(){
     const a=confirm("Would you like to confirm");
     if(a){
     alert("Thank you for shopping with us 😊.Your products will be delivered in 3 days to the address mentioned in your profile");
        this.init();
     }
    }
    
   
    @computed get totalCartAmount(){
     let subTotal=0;
     this.cartProductList.map(item=>{
         subTotal=subTotal+item.quantity*item.price;
     });
     
     return subTotal.toFixed(2);
    }
    
    
    @computed get noOfProductsInCart(){
       let NoOfItems=0;
       this.cartProductList.map(item=>{
         NoOfItems=NoOfItems+item.quantity;
     });
     return NoOfItems;
    }
 }
 
 
 
 export default CartStore;