import tw from "tailwind.macro";
import styled from '@emotion/styled';

const TotalGameColor=styled.div`
   background:${props=>props.SelectedTheme?"white":"#23323f"};
   color:${props=>props.SelectedTheme?"black":"white"};
   height:${props=>props.SelectedTheme?'100vh':'100vh'}
   `;


export {TotalGameColor};