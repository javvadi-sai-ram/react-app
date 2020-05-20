import React from "react";
import WithToggle from "../hocs/withToggle";
import tw from "tailwind.macro";
import styled from "@emotion/styled"

const CollapseButton=styled.button`${tw`bg-blue-400`}`;
const Collapseexpaand=styled.div`${tw`flex justify-center`}`

class CollapseExpand extends React.Component{
    render(){
        const {toggleStatus}=this.props
        return(
        <Collapseexpaand>
        <label>Sample Shopping List:</label>
        <span>
        <CollapseButton onClick={this.props.onToggle}>{toggleStatus?"Expand":"Collapse"}</CollapseButton>
        {toggleStatus&&
        <ul>
               <li>Coffee</li>
               <li>Tea</li>
               <li>Milk</li>
        </ul>
        }
        </span>
        </Collapseexpaand>
        );
    }
}

export default WithToggle(CollapseExpand); 