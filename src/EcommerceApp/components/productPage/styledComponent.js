import tw from "tailwind.macro";
import styled from '@emotion/styled';

const TotalProductList=styled.div`${tw`flex`}
width:80%
`;
const FilterBars=styled.div`${tw`flex`}
width:20%
`;
const MainBar=styled.div`${tw`flex`}`;
const Cart=styled.div`${tw`flex w-1/12`}
width:5%`;

const ProductList=styled.div`${tw``}
width:50%
`;




export {TotalProductList,FilterBars,MainBar,Cart,ProductList};