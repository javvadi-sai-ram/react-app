import React from "react";

import {observable,action,computed} from 'mobx';
//import {observer} from 'mobx-react';
import {TodoFooter,TodoFooterNoData} from "../../components/modtodolist/todoFooter.js";
import Todo from "../../components/modtodolist/todo.js";
import TodoModel from "./todoModel.js";
//import Todo from "./todo.js";

//@observer
class TodoStore {
    @observable isLoading=true
     todoId = 0;
    @observable listOfTodos=[]; 
    @observable todoFooterState="all";
    
   @action.bound
    jsonDataTodoList(jsonData){
        let updatedListOfTodos = this.listOfTodos.slice(0);
        jsonData.forEach((EachItem)=>{
            const todoModel=new TodoModel({id:EachItem.id, todo:EachItem.title, todoCheckStatus:EachItem.completed});
            updatedListOfTodos.push(todoModel);
        });
        this.listOfTodos=updatedListOfTodos;
        this.isLoading=false;
    }
    
    @action.bound addTodoToTodosList(event){
        if (event.key === "Enter" && event.target.value != "") {
            let updatedListOfTodos = this.listOfTodos.slice(0);
            const todoModel=new TodoModel({ id:this.todoId++, todo: event.target.value, todoCheckStatus: false});
            updatedListOfTodos.push(todoModel);
            event.target.value = "";
             this.listOfTodos= updatedListOfTodos;
             console.log(this.listOfTodos);
        }
    }
    
    @action.bound removeTodo(eachObj){
        console.log(eachObj)
        let dupList = this.listOfTodos.slice(0);
         let dupList1=dupList.filter(item=>item.id!==eachObj.id);
        this.listOfTodos= dupList1;
    }
    
     @action.bound allTodos(){
        this.todoFooterState= "all";
    }
    @action.bound 
    active(){
        this.todoFooterState= "active";
    }
    @action.bound completed(){
        this.todoFooterState= "completed";
    }
    @action.bound clearCompleted(){
        let dupList = this.listOfTodos.slice(0);
        let newDupList = dupList.filter(eachEl => eachEl.todoCheckStatus === false);
        this.listOfTodos= newDupList;
    }
    
    
    @computed get renderTodosList(){
        let dupList = this.listOfTodos.slice(0);
        let newbtn = this.todoFooterState;
        let newDupList; 
        switch (newbtn) {
            case "all":
                return newDupList = dupList.map((eachtodo) => <Todo key={eachtodo.id} eachObj={eachtodo} checkTodo={eachtodo.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} />);
            case "active":
                let dupList1 = dupList.filter((eachEl => eachEl.todoCheckStatus === false));
                return newDupList = dupList1.map((eachtodo) => <Todo key={eachtodo.id} eachObj={eachtodo} checkTodo={eachtodo.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo}/>);
                
            case "completed":
                let dupList2 = dupList.filter((eachEl => eachEl.todoCheckStatus === true));
                return newDupList = dupList2.map((eachtodo) => <Todo key={eachtodo.id} eachObj={eachtodo} checkTodo={eachtodo.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo}/>);
        }
    }
    
    
    
  @computed get numberOfItems(){
      let count=this.listOfTodos.filter(item=>{
          return item.todoCheckStatus===false;
      });
      return count.length;
  }
  @computed get clearCompletedCount(){
      let clearCompletedCount=this.listOfTodos.filter(item=>{
          return item.todoCheckStatus===true;
      });
      return clearCompletedCount.length;
  }
  
  
  @computed
  get todosCount(){
      return this.listOfTodos.length     
  }
    
  
    @action.bound todosFooter () {
        if ( this.todosCount> 0)
            return <TodoFooter numOfTodos={this.numberOfItems} allTodos={this.allTodos} active={this.active} completed={this.completed} clearCompleted={this.clearCompleted} numOfCompletedTodos={this.clearCompletedCount}/>;
        else if(!this.isLoading)
            return <TodoFooterNoData/>
    }
  
        
}


const TodoStores=new TodoStore();



export default TodoStores;