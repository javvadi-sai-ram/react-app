import tw from "tailwind.macro";
import styled from '@emotion/styled';

const EmojiHeader=styled.div`${tw`flex justify-between flex-row shadow-lg`}
background:${props=>props.theme.totalTheme};
color:${props=>props.theme.textColor}
`;
const ScoresAndTheme=styled.div`${tw`flex justify-between p-4`}`;
const Scores=styled.div`${tw`p-2`}`;
const TopScore=styled.div`${tw`p-2`}`;
const Theme=styled.button`${tw`p-2 border-solid border-2 border-gray-600`}`;
const EmojiName=styled.div`${tw`text-3xl p-3`}`;


export {EmojiHeader,ScoresAndTheme,Scores,TopScore,Theme,EmojiName};