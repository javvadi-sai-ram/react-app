import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import {inject,observer} from "mobx-react";
import {observable} from "mobx";

const EachFilter=styled.input`${tw`border border-black h-10 w-10 m-2 rounded-full`}
background:${props=>props.colortype?"black":"white"};
color:${props=>props.colortype?"white":"black"}
`;

@inject('productStore')
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