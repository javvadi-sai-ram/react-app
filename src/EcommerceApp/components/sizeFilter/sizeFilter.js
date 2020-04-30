import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import {observable} from "mobx";
import {observer,inject} from "mobx-react";
import EachFilterSize from "./eachFilterSize"
const SizeFilters=styled.div`${tw`text-xl`}
`;
const TotalTextSize=styled.div`${tw`m-2 text-xl font-medium`}
`;



@inject('productStore')
@observer
class SizeFilter extends React.Component{
    filterShopping=(event)=>{
        this.props.productStore.onSelectSize(event.target.value)
    }
    
    renderSize=()=>{
        const {productStore}=this.props
        return(
          productStore.getFilterSizes.map(item=>{
              return <EachFilterSize EachItem={item}/>
          })
       )
    }
    
    render(){
        return(
        <TotalTextSize>
           Size:
            <SizeFilters>
          {this.renderSize()}
          </SizeFilters>
         </TotalTextSize>
         
            )
    }
}

export default SizeFilter;




         