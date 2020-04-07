import React from "react";

class FavouriteDessert extends React.Component{
    constructor(){
        super();
        this.state={
            DessertList:["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"],
            userInputText:"",
            displayMessage:""
        }
    }
    
    renderDessertOptions=()=>{
        let list = this.state.DessertList.map((item,i)=>{
        return <div key={i}>
        <input type="radio" id={i} name='item' value={item} onChange={this.userInputText}></input>
        <label>{item}</label>
        </div>
        })
        return list;
    }
    userInputText=(event)=>{
        this.setState({
        userInputText:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({
        displayMessage:`My FavouriteDessert is "${this.state.userInputText}"`})
    }
    render(){
        return(
             <form>
             <h3>What is Your Favourite Dessert ?</h3>
             {this.renderDessertOptions()}
             <div>
             <input type="submit" value="Make Your Choice" onClick={this.handleSubmit}/>
             <h4>{this.state.displayMessage}</h4>
             </div>
        </form>
    )
    }
    
}

export {FavouriteDessert}