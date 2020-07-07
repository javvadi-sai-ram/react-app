import {create} from "apisauce";
import {networkCallWithApisauce} from "../../utils/APIUtils";
import {apiMethods} from "../../constants/APIConstants";


class ProductService{
    api
    constructor(){
        this.api=create({
              baseURL:"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
        });
    }
    

            
    getProductsAPI(){
        alert(2)
         return networkCallWithApisauce(
            this.api,
            'products?limit=2&offset=0',
            {},
            apiMethods.get
            );
    }
}


export default ProductService;


