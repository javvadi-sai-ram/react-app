
import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";



const EventAdder=styled.div`${tw`m-4`}`
const EventName=styled.input`${tw`border border-black`}`;
const EventLocation=styled.input`${tw`border border-black`}`;
const AddEventbutton=styled.button`${tw`border border-black`}`;

export {EventName,EventLocation,EventAdder,AddEventbutton};