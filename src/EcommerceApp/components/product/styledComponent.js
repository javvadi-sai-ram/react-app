import tw from "tailwind.macro";
import styled from '@emotion/styled';

const EachShoppingItem=styled.div`${tw`flex w-56 flex-col m-2 shadow-xl`}`;
const Image=styled.img`${tw`h-64 w-64 mt-1 mb-1 text-center`}`;
const Title=styled.div`${tw`text-center mt-1 mb-1 text-sm`}`;
const Price=styled.div`${tw`text-center mt-1 mb-1 font-medium`}`;
const Installments=styled.div`${tw`text-center mt-1 text-sm mb-1`}`;
const EachIte=styled.div`${tw`flex mt-1 mb-1`}`;
const AddToCarts=styled.input`${tw`border border-black bg-black w-28 rounded p-2 text-white`}`
const FreeShipping=styled.div`${tw`bg-black text-white flex w-24 text-sm ml-32 absolute`}
`




export {EachShoppingItem,Image,Title,Price,Installments,EachIte,AddToCarts,FreeShipping};