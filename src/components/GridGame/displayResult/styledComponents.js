import tw from "tailwind.macro";
import styled from '@emotion/styled';


const DisplayResultDiv=styled.div`${tw`flex justify-center items-center flex-col`}`;
const YouDoneWell=styled.div`${tw`text-4xl mt-24 mb-12 text-green-600`}`;
const Won=styled.div`${tw`text-6xl text-center m-6`}`;
const DoneWellAndWon=styled.div`${tw`flex flex-col  justify-center`}`;
const PlayAgainButton=styled.button`${tw`p-4 border border-black m-10 bg-blue-500 rounded`}`;
const NumberLevel=styled.div`${tw`text-center text-4xl`}`;

export {DisplayResultDiv,YouDoneWell,Won,DoneWellAndWon,PlayAgainButton,NumberLevel};