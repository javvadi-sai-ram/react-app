
import React from "react";
import {withRouter} from "react-router-dom"
import {Header,ColorForCountryDetails,Backbutton,CountryDetails,BorderCountriesButton} from "./tw&emotion.js";
import { FaRegMoon } from 'react-icons/fa';



let countryList=[];
class CountryCard extends React.Component{
    state={
        state:this.props.location.state,
        allcountries:this.props.location.countries,
        countryDataAll:[]
    }
    navigateOriginal=()=>{
        this.props.history.goBack();
    }
    languages=()=>{
        let arr=[];
        arr=this.state.state.languages.map(item=>{
            return item.name;
        });
        return arr;
    }
   componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
  .then(response => response.json())
  .then(jsonData=>{this.getCountries(jsonData)});
    }
    getCountries=(jsonData)=>{
        this.setState({
            countryDataAll:jsonData,
        });
    }
    
     getCountry=(event)=>{
        this.state.countryDataAll.forEach((eachobject)=>{
            countryList.push(eachobject)
            if(event===eachobject.alpha3Code){
                this.setState({
                    state:eachobject
                })
            }
        })
    }
    
    FindingFullName=(shortName)=>{
     let y=this.state.countryDataAll.slice(0)
     let x=y.map((item)=>{
              if(item.alpha3Code===shortName){
                 return item.name
             }
        })
        return x
    }
        
    
    borderCountries=(obj,i)=>{
       return obj.map((eachobject)=><BorderCountriesButton color={this.props.boolForColorMode} key={i} value={eachobject} onClick={()=>this.getCountry(eachobject)}>{this.FindingFullName(eachobject)}</BorderCountriesButton>
       )}   

   
   
   
    render(){
        console.log(this.props)
       return (
         <ColorForCountryDetails SelectedTheme={this.props.boolForColorMode}>
         
         <Header>
            <div>
            <h4>Where in the World?</h4>
            </div>
            <div>
            <h4  onClick={this.props.lightMode}><FaRegMoon />&nbsp;&nbsp;{this.props.boolForColorMode?"lightMode":"darkMode"}</h4>
            </div>
        </Header>
        
        
        <Backbutton onClick={this.navigateOriginal}>Back</Backbutton>
        <CountryDetails>
        <div className={"w-2/5"}>
        <img src={this.state.state.flag} alt="hddj"/>
        </div>
        <div className={"w-1/4"}>
        <h1>{this.state.state.name}</h1>
        <p><b>nativeName:</b> {this.state.state.nativeName}</p>
        <p><b>Population:</b> {this.state.state.population}</p>
        <p><b>SubRegion:</b> {this.state.state.subregion}</p>
        <p><b>Region:</b> {this.state.state.region}</p>
        <p><b>Capital:</b> {this.state.state.capital}</p>
        <p><b>Bordercountries:</b></p>
        <p>{this.borderCountries(this.state.state.borders)}</p>
        </div>
        <div className={"w-1/4"}>
        <p><b>Top Level Domain:</b>{this.state.state.topLevelDomain[0]}</p>
        <p><b>Currency:</b> {this.state.state.currencies[0].name}</p>
        <p><b>languages:</b>{this.languages()}</p>
        </div>
        </CountryDetails>
        </ColorForCountryDetails> 
       
       
        );
    }
}

export default withRouter(CountryCard);