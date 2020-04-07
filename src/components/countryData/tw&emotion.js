import styled from '@emotion/styled';
import tw from 'tailwind.macro';



const Header=styled.div`${tw`flex justify-between items-center p-3 shadow-lg m-1`}
    
`;
const ColorForCountryDetails=styled.div`
   background:${props=>props.SelectedTheme?"white":"#23323f"};
   color:${props=>props.SelectedTheme?"black":"white"};
 
`;
const Backbutton=styled.button`${tw`p-2 border-black shadow-lg m-2 bg-white text-black`}`
const CountryDetails=styled.div`${tw`flex justify-between`}`
const BorderCountriesButton=styled.button`
     border:${props=>props.color?"1px solid black":"1px solid white"};
     color:${props=>props.color?"black":"white"};
     padding:${props=>props.color?"3px":"3px"};
     margin:${props=>props.color?"3px":"3px"};
     border-radius:${props=>props.color?"5px":"5px"};
     
`

export {Header,ColorForCountryDetails,Backbutton,CountryDetails,BorderCountriesButton};