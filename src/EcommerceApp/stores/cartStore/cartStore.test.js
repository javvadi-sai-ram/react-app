/*global expect*/
import CartStore from ".";
import productListResponse from "../../fixtures/productListResponse.json";
import CartModel from './cartModel';


describe("cartStore tests",()=>{
    let cartStore;
    let cartModel;
    
    beforeEach(()=>{
        //cartModel=new CartModel()
        cartStore=new CartStore();
    });
    
    
    it("should tests onClickAddToCart that length",()=>{
        cartStore.onClickAddToCart(productListResponse[0]);
        expect(cartStore.cartProductList.length).toBeGreaterThanOrEqual(1);
    });
    
    it("should tests onClickAddToCart that length",()=>{
        cartStore.onClickAddToCart(productListResponse[0]);
        cartStore.onClickAddToCart(productListResponse[0]);
        expect(cartStore.cartProductList[0].quantity).toBeGreaterThanOrEqual(2);
    });
    
    it("should tests onClickAddToCart and remove that the length",()=>{
        cartStore.onClickAddToCart(productListResponse[0]);
        cartStore.onRemoveCartItem(productListResponse[0]);
        expect(cartStore.cartProductList.length).toBeGreaterThanOrEqual(cartStore.noOfProductsInCart);
    });
    it("should tests onClickAddToCart that length",()=>{
        cartStore.onClickAddToCart(productListResponse[0]);
         cartStore.onClickAddToCart(productListResponse[1]);
        cartStore.onRemoveCartItem(productListResponse[0]);
        expect(cartStore.cartProductList.length).toBeGreaterThanOrEqual(1);
    });
    
    it("should test user click on clear cart it should be empty",()=>{
        cartStore.onClickAddToCart(productListResponse[0]);
         cartStore.onClickAddToCart(productListResponse[1]);
         cartStore.onClickAddToCart(productListResponse[2]);
         cartStore.onClickAddToCart(productListResponse[3]);
         cartStore.clearCart();
         expect(cartStore.cartProductList.length).toBe(cartStore.noOfProductsInCart);
    });
    
    
    it("should tests onClickAddToCart that length",()=>{
         cartStore.onClickAddToCart(productListResponse[0]);
         cartStore.onClickAddToCart(productListResponse[1]);
        expect(parseFloat(cartStore.totalCartAmount)).toEqual(3112.30);
    });
     it("should tests onClickAddToCart that length",()=>{
         cartStore.onClickAddToCart(productListResponse[0]);
         cartStore.onClickAddToCart(productListResponse[1]);
        expect(cartStore.noOfProductsInCart).toEqual(2);
    });
    
    
})