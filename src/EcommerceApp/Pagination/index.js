import React from "react";
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';
import tw from "tailwind.macro";
import styled from '@emotion/styled';


const Pagination=styled.div`${tw`p-8 flex`}`
const LeftButton=styled.button`${tw`p-2 m-1 border border-black`}`
const RightButton=styled.button`${tw`p-2 m-1 border border-black `}` 
const StartPage=styled.div`${tw`p-2 m-1 border border-black `}`
const EndPage=styled.div`${tw`p-2 m-1 border border-black `}`
const Divide=styled.div`${tw`p-2 m-2`}`
  
class Paginations extends React.Component{
    render(){
        return(
        <Pagination>
        <LeftButton>{<FaArrowAltCircleLeft size={25}/>}</LeftButton>
        <StartPage>1</StartPage>
        <Divide>/</Divide>
        <EndPage>1</EndPage>
        <RightButton>{<FaArrowAltCircleRight size={25}/>}</RightButton>
        </Pagination>
        )
    }
}


export default Paginations;