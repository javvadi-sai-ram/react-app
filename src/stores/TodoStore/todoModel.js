//import React from "react"

import {observable,action} from "mobx";

class TodoModel{
    @observable id;
    @observable todo;
    @observable todoCheckStatus;
    
    
    constructor(props){   
        this.id=props.id;
    this.todo=props.todo;   
   this.todoCheckStatus=props.todoCheckStatus;
    }
    
     @action.bound checkTodo(){
         console.log(this.props)
         if(this.todoCheckStatus===true)
         {
             this.todoCheckStatus=false;
         }
         else{
             this.todoCheckStatus=true;
         }
     }
     @action.bound
     updateTodo(event){
        this.todo=(event.target.value);
     }
}

export default TodoModel;
