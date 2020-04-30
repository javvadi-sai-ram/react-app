import React from "react";
import {inject,observer} from "mobx-react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EachShoppingItem=styled.div`${tw`flex w-56 flex-col m-2 shadow-xl`}`;
const Image=styled.img`${tw`h-64 w-64 mt-1 mb-1 text-center`}`;
const Title=styled.div`${tw`text-center mt-1 mb-1 text-sm`}`;
const Price=styled.div`${tw`text-center mt-1 mb-1 font-medium`}`;
const Installments=styled.div`${tw`text-center mt-1 text-sm mb-1`}`;
const EachIte=styled.div`${tw`flex mt-1 mb-1`}`;
const AddToCarts=styled.input`${tw`border border-black bg-black w-28 rounded p-2 text-white`}`
const FreeShipping=styled.div`${tw`bg-black text-white flex w-24 text-sm ml-32 absolute`}
`


      
@inject('cartStore')
@observer
class Product extends React.Component{
    onClickAddToCart=()=>{
          toast.warn('👍 Product Added To Your Cart')
        const {eachItem}=this.props;
        this.props.cartStore.onClickAddToCart(eachItem);
    }
    
    renderEachShoppingProduct=()=>{
        const {eachItem}=this.props;
        let installmentAmount=(eachItem.price/eachItem.installmentsCount).toFixed(2);
        return(
        <EachShoppingItem>
        <div>
        {eachItem.isFreeShipping?<FreeShipping>Free Shipping</FreeShipping>:null}
           <Image src={eachItem.imageURL}/>
           
          </div>
           <Title>{eachItem.title}</Title>
           <Price><span>{eachItem.currencyFormat}</span>{eachItem.price}</Price>
           <Installments>or {eachItem.installmentsCount} X <span>{eachItem.currencyFormat}</span> {installmentAmount}</Installments>
           <AddToCarts type="button" value="Add to cart" onClick={this.onClickAddToCart}></AddToCarts>
           <ToastContainer autoClose={5000} hideProgressBar={false} position={toast.POSITION.BOTTOM_CENTER}/>
        </EachShoppingItem>
        );
    }
    
    render(){
        return(
            <EachIte>
               {this.renderEachShoppingProduct()}
            </EachIte>
            );
    }
}

export default Product;


