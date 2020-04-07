import React from "react";


class FilterRegion extends React.Component{
    state={
        countryDataFilter:this.props.countryData,
        selectedRegion:"",
        bool:false,
        data:[]
    }
  
    render(){
        return(
            <div>
            <div>
            <select className={this.props.boolForColorMode?"light-Mode-Select-tag":"dark-Mode-select-tag"} onChange={this.props.handleOnchangeSelectedRegion}>
            {this.props.continent.map((item,index)=>{
                return(
                <option key={index} value={item} >{item}</option>
                );
            })}
            </select>
            </div>
            </div>
            );
    }
}
export{FilterRegion};



