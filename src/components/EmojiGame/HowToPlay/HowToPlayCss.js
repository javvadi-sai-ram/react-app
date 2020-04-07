import tw from "tailwind.macro";
import styled from "@emotion/styled";



const Footer=styled.div`${tw`bg-white`}
background:${props=>props.theme.totalTheme};
color:${props=>props.theme.textColor}
`;
const HowToPlayName=styled.div`${tw`text-3xl pl-3`}`;

const Instructions=styled.div`${tw`text-1xl pl-5 mb-8`}`;


export {HowToPlayName,Instructions,Footer};