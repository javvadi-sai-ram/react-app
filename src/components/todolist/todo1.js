import React from 'react';

let count=0
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.onchangeHandler=this.onchangeHandler.bind(this);
        this.state={
            value:"",
            array:[],         
            i:[],
            task:[],
            task2:[]
        };
    }
    onchangeHandler=(event)=>{
        if(event.key==='Enter'&&event.target.value!==""){
        let object={
            val:event.target.value,
            check:false,
            coun:count
        };
        this.state.task2.push(object);
        this.state.task.push(object);
        const state=this.state;
        state.value=(event.target.value);
        event.target.value = "";
         state.array.push(this.state.value);
        this.setState(state);
        count+=1;
        }
    }
     remove=(event)=>{
         let id=event.target.id;
         let val=this.state.task.filter(item=>item.coun!==Number(id));
         this.setState({
             task:val   
         });
     }
       checkboxOnClick=(event)=>{
       const target=event.target.id;
       const updateCheck=this.state.task.slice(0);
       updateCheck.forEach(item=>{
           if(item.coun===parseInt(target)){
               item.check=!item.check;
           }
       })
       this.setState({
           task:updateCheck
       });
    
       }
  onall=(event)=>{
      const displayAll=this.state.task2.filter(item=>(item));
      this.setState({task:displayAll});
  }
   active=()=>{
       const displayActive=this.state.task2.filter(item=>(item.check===false));
       this.setState({task:displayActive}); 
   }
   completed=()=>{
       const displayCompleted=this.state.task2.filter(item=>(item.check===true));
       this.setState({task:displayCompleted});
   }
   clearCompleted=()=>{
       const displayclearCompleted1=this.state.task.filter(item=>(item.check!==true));
      const displayclearCompleted=this.state.task2.filter(item=>(item.check!==true));
      this.setState({task:displayclearCompleted,task2:displayclearCompleted1});
   }
render(){    
 return(
 <div>
     <div className="input">
     <label>
        <input className="input-tag" placeholder="Type Here" type="text" onKeyDown={this.onchangeHandler} />
        </label>
    </div>
    <div>
        {this.state.task.map((item)=>
           <TodoTasks name={item.val} total={item} key={item.coun} id={item.coun} checkboxOnClick={this.checkboxOnClick} remove={this.remove}/>
        )}
    </div>
    <div>
    <Todofooter total={this.state.task} onall={this.onall} active={this.active} completed={this.completed} clearCompleted={this.clearCompleted}/>
    </div>
</div>
    );
    }
}            
class TodoTasks extends React.Component{
      constructor(props){
          super(props);
          this.state={
          };
      }
      
    
    render(){
        return(
             <div className="flex">
        <div>
            <input  type="checkbox" id={this.props.id} onClick={this.props.checkboxOnClick} />
        </div>
            <div>
            <input type="text" id={this.props.id} defaultValue={this.props.name} className={(this.props.total.check)?"textDecor":"nodecor"}/>
        </div>
            <div>
            <button id={this.props.id} onClick={this.props.remove}>X</button>
        </div>
        </div>
            )
    }
}

 class Todofooter extends React.Component{
    render(){
        return(
            <div className="footer">
            <div id="itemsLeft">{this.props.total.length} Items Left</div>
            <button onClick={this.props.onall}>All</button>
            <button onClick={this.props.active}>Active</button>
            <button onClick={this.props.completed}>Completed</button>
            <button onClick={this.props.clearCompleted}>clear completed</button>
            </div>
            );
            
    }
}
export {Todo};