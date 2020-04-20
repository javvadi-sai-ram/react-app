import tw from "tailwind.macro";
import styled from '@emotion/styled';


const HeaderPart=styled.div`${tw`flex flex-col justify-center items-center  m-4`}`;
const LevelAndLightMode=styled.div`${tw`flex p-4`}`;
const Level=styled.div`${tw`flex p-4 mr-10`}`;
const LightMode=styled.div`${tw`flex p-2 border items-center`}
 border-color:${props=>props.borderMode?"black":"white"}
`;
const TopLevel=styled.div`${tw`m-4`}`;

export {HeaderPart,LevelAndLightMode,Level,LightMode,TopLevel};