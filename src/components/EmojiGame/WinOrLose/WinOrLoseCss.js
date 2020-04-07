import tw from "tailwind.macro";
import styled from "@emotion/styled";


const WinOrLoses=styled.div`${tw`flex flex-col justify-center items-center bg-gray-400`}`;
const ScoreUpdates=styled.h1`${tw`mb-4 text-4xl`}`;
const GameState=styled.div`${tw`mb-4 text-3xl`}`;
const PlayAgainButton=styled.button`${tw`p-2 border-solid border-2 border-gray-600 mb-4`}`;
const TryAgainButton=styled.button`${tw`p-2 border-solid border-2 border-gray-600 mb-4`}`;


export {WinOrLoses,GameState,ScoreUpdates,PlayAgainButton,TryAgainButton};