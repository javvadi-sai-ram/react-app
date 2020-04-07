import React from "react";
/*global fetch*/
import DisplayCountriesAll from "./displayCountries.js";
import "./countries.css";
import {Heading} from "./heading.js";
import {FilterRegion} from "./selectedregion.js";
import {CountryFilterBar} from "./countryFilterBar.js";
//import {CountryCard} from "./countryCard.js"





const continent=["All","Americas","Asia","Europe","Oceania"];


class CountrydashBoardApp extends React.Component{
    state={
        bool:false,
        countryData:[],
        countryData1:[],
        countryData2:[],
        value:"",
        
    }
    
    
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
  .then(response => response.json())
  .then(jsonData=>{this.getCountries(jsonData)});
    }
    getCountries=(jsonData)=>{
        this.setState({
            bool:true,
            countryData:jsonData,
            countryData1:jsonData,
            countryData2:jsonData,
        });
    }
    
    
    filterCountriesByRegion=()=>{
       let x=this.state.countryData.slice(0);           
        return(
                <FilterRegion continent={continent} countryData={x} boolForColorMode={this.props.boolForColorMode} handleOnchangeSelectedRegion={this.handleOnchangeSelectedRegion}/>
        );
    }
    
    
    handleOnchangeSelectedRegion=(event)=>{
      if(event.target.value==="All"){
          this.setState({countryData:this.state.countryData1,countryData2:this.state.countryData1});
      }
     if(event.target.value!=="All"){
         let answer=this.state.countryData1.filter(item=>item.region===event.target.value);
         this.setState({countryData:answer,countryData2:answer});
         
     }
   }
    formatString=(str) =>{
      return str
         .replace(/(\B)[^ ]*/g,match =>(match.toLowerCase()))
          .replace(/^[^ ]/g,match=>(match.toUpperCase()));
          } 

   
   filterCountriesBySearch=(event)=>{
        let regions=this.state.countryData2;
        let xy;
        let regex=(event.target.value);
         {xy=this.formatString(regex)}
        let regex1=(xy);
        let filter=regions.filter(item=>{
            if((item.name).includes(regex1)){
                return item;
            }
        });                            
        this.setState({countryData:filter});
   }
   
   
    render(){
        return(
            
                 <div className={this.props.boolForColorMode?"lightMode":"darkMode"}>
                 <div>
                 <Heading  lightMode={this.props.lightMode} boolForColorMode={this.props.boolForColorMode}/>
                 </div>
                 <div className="selectedregion-and-searchcountry">
                 {/* {this.state.bool === true?this.filterCountriesBySearch():null}*/}
                 <CountryFilterBar filterCountriesBySearch={this.filterCountriesBySearch} boolForColorMode={this.props.boolForColorMode}/>
                 {this.state.bool === true?this.filterCountriesByRegion():null}
                 </div>
               {/* {this.state.bool === true? this.displayCountries():null}*/}
                 {this.state.countryData.length>=1?
                <DisplayCountriesAll countriesData={this.state.countryData}/>:
             <div className="loader">  
                </div>}
                 </div>
            );
        
    }
}

export {CountrydashBoardApp};