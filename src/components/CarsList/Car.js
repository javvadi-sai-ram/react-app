/*global React*/
import React from 'react'
class Car extends React.Component{
    constructor(props){
        super();
        this.onAccelerate=this.onAccelerate.bind(this);
        this.onStartOrStop=this.onStartOrStop.bind(this);
        this.onApplyBrake=this.onApplyBrake.bind(this);
        this.displayStatusText=this.displayStatusText.bind(this);
        this.state= {isToggleOn: true,
                  isSpeed:0
        };
        
    }
        onStartOrStop(){
       return this.setState(state => ({
      isToggleOn: !state.isToggleOn
          })); 
        }
        onApplyBrake(){
           if(this.state.isToggleOn===false){
                if(this.state.isSpeed>=10){
               return this.setState(state => ({
               isSpeed:state.isSpeed-10
          }));
                }
            }
    }
        onAccelerate(){
            console.log(this.state.isSpeed);
            if(this.state.isToggleOn===false){
               return this.setState(state => ({
               isSpeed:state.isSpeed+10
          })); 
            }
        }
        displayStatusText(){
            if(this.state.isToggleOn===true){
                this.state.isSpeed=0;
            return "status:stopped";
            }
            else{
                if(this.state.isSpeed>=10){
                    return `running With Speed of ${this.state.isSpeed}`;
                }
                else{
                return "status:Running";
                }
            }
        }
        render(){
       return  (<div className="totalCar">
        <div className="carHead">
         <h3>Car: {this.props.number}</h3>
         <h3 id={this.props.number} onClick={this.props.removeCar}>X</h3>
         </div>
    
         <div className="buttonStartOrStop">
         <button onClick={this.onStartOrStop}> {this.state.isToggleOn ? 'Start' : 'Stop'}</button>
         </div>
         
         <div className="status">
         <this.displayStatusText/>
         </div>
         
         <div className="carFooter">
         <button onClick={this.onAccelerate}>Acclerate</button>
         <button onClick={this.onApplyBrake}>Apply Brake</button>
         </div>
         </div>);
     }
    
}

export {Car}