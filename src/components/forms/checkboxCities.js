import React from "react";
import {VisitedCities} from "./visitedCities.js"
class CheckboxWithLabel  extends React.Component{
    constructor(){
        super();
        this.state={
            cityList:["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]
        }
    }
    render(){
        return(
        <div>
        <div>
        <h4>Which Of the following cities you have visited?</h4>
        </div>
        <VisitedCities cities={this.state.cityList}/>
        </div>
        );
    }
}
export{CheckboxWithLabel}