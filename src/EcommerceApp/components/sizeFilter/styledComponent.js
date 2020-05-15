import tw from "tailwind.macro";
import styled from '@emotion/styled';

const SizeFilters=styled.div`${tw`text-xl`}
`;
const TotalTextSize=styled.div`${tw`m-2 text-xl font-medium`}
`;
const EachFilter=styled.input`${tw`border border-black h-10 w-10 m-2 rounded-full`}
background:${props=>props.colortype?"black":"white"};
color:${props=>props.colortype?"white":"black"}
`;




export {SizeFilters,TotalTextSize,EachFilter};