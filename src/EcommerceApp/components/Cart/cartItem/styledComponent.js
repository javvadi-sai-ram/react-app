import tw from "tailwind.macro";
import styled from '@emotion/styled';



const EachShoppingItem=styled.div`${tw`flex  w-2/5`}
`;
const Image=styled.img`${tw`h-20 w-20 m-1`}`;
const Title=styled.div`${tw`text-xs`}`;
const Price=styled.div`${tw`text-sm text-yellow-800 pr-4`}`;
const ImageDetails=styled.div`${tw`flex `}`;
const Quantity=styled.div`${tw`text-sm`}`
const TotalCart=styled.div`${tw`flex justify-between border-white border-t-2 pt-2 pb-2`}`;
const DeleteCart=styled.div`${tw`border border-white flex justify-center`}`


export {Image,Title,Price,ImageDetails,Quantity,TotalCart,DeleteCart};