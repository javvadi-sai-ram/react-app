import tw from "tailwind.macro";
import styled from '@emotion/styled';



const SignInFormEcommerce=styled.div`${tw`flex justify-center items-center flex-col p-3 border bg-white`}`;
const SignIn=styled.input`${tw`border border-gray-400 h-10 m-2 w-48`}`;
const Password=styled.input`${tw`border border-gray-400 h-10 m-2 w-48`}`;
const Button=styled.button`${tw`border border-black h-10 m-2 flex justify-center w-48 bg-black text-white`}
color:${props=>props.color}
`;
const SignInComment=styled.div`${tw`self-start pl-4 mt-2 mb-2 font-semibold`}`;
const TotalSignIn=styled.form`${tw`flex justify-center items-center h-screen bg-gray-200`}`;
const ErrorMessage=styled.div`${tw`text-red-600`}`;


export {SignInFormEcommerce,SignIn,Password,Button,SignInComment,TotalSignIn,ErrorMessage};