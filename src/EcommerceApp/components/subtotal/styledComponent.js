import tw from "tailwind.macro";
import styled from '@emotion/styled';

const SubTotalAndAmount=styled.div`${tw`flex justify-between`}`;
const SubTotals=styled.div`${tw`text-yellow-800`}`;
const Amount=styled.div`${tw``}`;
const CheckoutButtons=styled.div`${tw`flex justify-center`}`;



export {SubTotalAndAmount,SubTotals,Amount,CheckoutButtons};