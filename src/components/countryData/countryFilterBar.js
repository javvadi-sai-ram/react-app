import React from "react";
import { GoSearch } from 'react-icons/go';

class CountryFilterBar extends React.Component{
    render(){
        return(
            <div className={this.props.boolForColorMode?"light-Mode-Search-Icon":"dark-Mode-Search-Icon"} >
            <GoSearch size={20} className={this.props.boolForColorMode?"light-Mode-Search-Icon":"dark-Mode-Search-Icon"}/>
            <input className={this.props.boolForColorMode?"light-Mode-Search-Icon":"dark-Mode-Search-Icon"} type="text" onChange={this.props.filterCountriesBySearch} placeholder="Search Your country"/>
            </div>
            );
    }
}


export {CountryFilterBar};