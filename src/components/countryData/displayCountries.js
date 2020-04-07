import React from "react";
import "./countries.css";
import { withRouter } from 'react-router-dom';
let list;
class DisplayCountriesAll extends React.Component{
    
    countryCard=(event)=>{
       this.props.history.push({
           pathname:"/goToCountryCard",
           state:event,
           countries:this.props.countriesData
       });    
   }
   
   
    fecthingdata=()=>{
         list = this.props.countriesData.map((item,i)=>{
        return (
        <div key={i} id={item.name} value={item.name} className="each-country" onClick={()=>this.countryCard(item)}>
        <img src={item.flag} alt="hddj" className="sizing-Width"/>
        <div className="country-details">
        <h6 className="letter-sizing-country"><b>{item.name}</b></h6>
        <p><b>Population:</b> {item.population}</p>
        <p><b>Region:</b> {item.region}</p>
        <p><b>Capital:</b> {item.capital}</p>
        </div>
        </div>
        )
        });
        
        return list;
        
            
    }
    render(){
        
        return(
                <div className="flexing">
            {this.fecthingdata()}
            </div>
            );
    }
}
export default withRouter(DisplayCountriesAll);







