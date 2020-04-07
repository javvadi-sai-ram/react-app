
import tw from "tailwind.macro";
import styled from '@emotion/styled';

const EmojiData=styled.div`${tw`w-64 p-5 mx-4 my-10 flex flex-col items-center shadow-custom`}
background:${props=>props.theme.cardColor}
`;
const TotalDataEmojis=styled.div`${tw`flex flex-wrap justify-around`}
background:${props=>props.theme.background}
`;
const EmojiImage=styled.img`${tw``}`;

const EmojisGestureName=styled.div`${tw`text-1xl`}
color:${props=>props.theme.textColor}
`;

export {EmojiData,TotalDataEmojis,EmojiImage,EmojisGestureName};