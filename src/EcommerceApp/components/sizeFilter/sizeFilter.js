import React from "react";
import {observable} from "mobx";
import {observer,inject} from "mobx-react";
import EachFilterSize from "./eachFilterSize"
import {SizeFilters,TotalTextSize,EachFilter} from "./styledComponent.js"


//@inject('productStore')
@observer
class SizeFilter extends React.Component{
    filterShopping=(event)=>{
        this.props.productStore.onSelectSize(event.target.value)
    }
    
    renderSize=()=>{
        const {productStore,cartStore}=this.props
        return(
          productStore.getFilterSizes.map(item=>{
              return <EachFilterSize cartStore={cartStore} productStore={productStore} key={item} EachItem={item}/>
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




         