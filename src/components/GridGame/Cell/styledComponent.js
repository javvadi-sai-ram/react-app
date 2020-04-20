import tw from "tailwind.macro";
import styled from '@emotion/styled';



const EachCell=styled.button`${tw`flex border border-black m-1 bg-gray-700`}
    ${props=>props.isClickedOnCell?props.isHidden?props.boolForColorMode?tw`bg-green-600`:tw`bg-blue-600`:tw`bg-red-600`:null};
    width:${props=>props.stylewidth}px;
    height:${props=>props.stylewidth}px;
`;
const EachCellWithColor=styled.div`${tw`flex border border-black m-1 bg-green-500`}
${props=>props.boolForColorMode?tw`bg-green-600`:tw`bg-blue-600`}
      width:${props=>props.stylewidth}px;
    height:${props=>props.stylewidth}px;    
`;
const EachCellElement=styled.div`${tw`flex flex-row`}`;

export {EachCell,EachCellWithColor,EachCellElement};