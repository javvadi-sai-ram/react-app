import ProductStore from "./productStore/productStores";
import ProductService from "../services/productServices";
import CartStore from "./cartStore";
 
const productService=new ProductService();
const productStore=new ProductStore(productService);
const cartStore=new CartStore();



export default { productStore,cartStore};