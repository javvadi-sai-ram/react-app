import React from "react";

import {inject,observer} from "mobx-react";
import {observable} from "mobx";
import {SizeFilters,TotalTextSize,EachFilter} from "./styledComponent.js"

//@inject('productStore')
@observer
class EachFilterSize extends React.Component{
    @observable isSizeFiltered;
    constructor(){
        super();
        this.init();
    }
    init(){
        this.isSizeFiltered=false;
    }
    
    filterShopping=(event)=>{
        if(this.isSizeFiltered===false){
           this.isSizeFiltered=true;  
        }
        else{
            this.init();
        }
        this.props.productStore.onSelectSize(event.target.value);
    }
    
    
    render(){
        return(
               <EachFilter colortype={this.isSizeFiltered} type="button" value={this.props.EachItem} onClick={this.filterShopping}/>
            );
    }
}

export default EachFilterSize;