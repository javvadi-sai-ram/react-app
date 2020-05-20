import React from "react";

/*global fetch*/

const  WithCountries=WrappedComponent=>{
     class NewComponent extends React.Component{
         
         constructor(props){
             super(props);
             this.state={
                 countriesData:[],
             };
         }
         
    async componentDidMount(){
        
       let x=await fetch("https://restcountries.eu/rest/v2/all")
         .then(response => response.json());
         this.setState({
             countriesData:x
         });
    }
        render(){
            
            const {countriesData}=this.state;
            if(countriesData.length>0){
            return <WrappedComponent {...this.props} countriesData={this.state.countriesData}/>;
            }
            else{
              return null;
            }
        }
    }
    return NewComponent;
};

export default WithCountries;