
import React from "react";
import DisplayCountriesAll from "./displayCountries.js";
import "./countries.css";
import {Heading} from "./heading.js";
import {FilterRegion} from "./selectedregion.js";
import {CountryFilterBar} from "./countryFilterBar.js";
//import {CountryCard} from "./countryCard.js"
import WithCountries from "./Hoc/withCountries";

let regex="";
let region;
let continents;
let filteredData;
const continent=["All","Americas","Asia","Africa","Europe","Oceania"];
class CountrydashBoardApp extends React.Component{
             state={
                       bool:false,
                       countryData:[],
                       countryData1:[],
                       countryData2:[],
                       value:"",
                        }
    componentDidMount(){
        this.getCountries();
    }
    getCountries=()=>{
        
        const {countriesData}=this.props;
        this.setState({bool:true,countryData1:countriesData,countryData2:countriesData,countryData:countriesData});
    }
    filterCountriesByRegion=()=>{
       let x=this.state.countryData.slice(0);           
        return(
                <FilterRegion continent={continent} countryData={x} boolForColorMode={this.props.boolForColorMode} handleOnchangeSelectedRegion={this.handleOnchangeSelectedRegion}/>
        );
    }
    handleOnchangeSelectedRegion=(event)=>{
    continents=event.target.value;
      if(event.target.value==="All"){
          this.setState({countryData:this.state.countryData1,countryData2:this.state.countryData1});
      }
     if(event.target.value!=="All"){
         filteredData=this.state.countryData1.filter(item=>item.region===event.target.value);
         this.setState({countryData:filteredData,countryData2:filteredData});
     }
     if(regex!==""){
           this.filterCountriesBySearchByregion();
     }
   }
   
       formatString=(str) =>{
      return str
         .replace(/(\B)[^ ]*/g,match =>(match.toLowerCase()))
          .replace(/^[^ ]/g,match=>(match.toUpperCase()));
          } 
   
   filterCountriesBySearch=(event)=>{
      region=this.state.countryData2.slice(0);
        let xy;
          let value=(event.target.value);
         xy=this.formatString(value);
         regex=(xy);
        let filter=region.filter((item)=>{
            if((item.name).includes(regex)){
                return item;
            }
            return null;
        });                            
        this.setState({countryData:filter});
   }
   filterCountriesBySearchByregion=()=>{
      if(continents==="All"){
          let filter=this.state.countryData1.filter(item=>{
            if((item.name).includes(regex)){
                return item;
            }
            return null;
        }); 
        
        this.setState({countryData:filter});
      }
      else{
          let filter=filteredData.filter(item=>{
            if((item.name).includes(regex)){
                return item;
            }
            return null;
        });
       this.setState({countryData:filter});
      }
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

export default WithCountries(CountrydashBoardApp);