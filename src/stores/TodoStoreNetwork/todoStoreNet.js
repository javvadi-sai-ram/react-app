import React from "react";
import {bindPromiseWithOnSuccess} from "@ib/mobx-promise";
import {API_INITIAL} from "@ib/api-constants";

import {observable,action,computed} from 'mobx';
//import {TodoFooter,TodoFooterNoData} from "../../components/todolistNetwork/todoFooterNet.js";
import Todo from "../../components/todolistNetwork/todoNet.js";
import TodoModel from "./todoModelNet.js";



class TodoStore {
    @observable isLoading;
     todoId = 0;
    @observable listOfTodos; 
    @observable todoFooterState;
    @observable getTodoApiStatus;
    @observable getTodoApiError;
    @observable todos;
    todoService
    
    
    constructor(todoService){
    this.init();
    this.todoService=todoService;
    }
    
    init(){
        
        this.isLoading=true;
        this.listOfTodos=[];
        this.todoFooterState="all";
        this.getTodoApiStatus=API_INITIAL;
        this.getTodoApiError=null;
        this.todos=[];
    }
    
    @action.bound
    setTodoApiResponse(userResponse){
        console.log(userResponse)
        this.todos=userResponse;
        this.todoListJsonData();
    }
    
    @action.bound
    setTodoApiError(error){
        this.getTodoApiError=error;
    }
    
    @action.bound
    setTodoApiStatus(apiStatus){
        this.getTodoApiStatus=apiStatus;
    }
    
    
   @action.bound
    getTodoList(){
        const todoPromise=this.todoService.getTodoAPI();
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setTodoApiStatus,this.setTodoApiResponse)
        .catch(this.setTodoApiError);
    }
    
    
    @action.bound
    todoListJsonData(){
        let updatedListOfTodos=this.listOfTodos.slice(0);
        this.todos.forEach(item=>{
            const todoModel=new TodoModel({ id:item.id, todo:item.title, todoCheckStatus:item.completed});
            updatedListOfTodos.push(todoModel);
        });
        console.log("hhh",updatedListOfTodos)
        this.listOfTodos=updatedListOfTodos;
    }
    
    @action.bound 
    addTodoToTodosList(event){
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
    

  @action
  clearStore(){
      this.init()
  }
  
        
}






export default TodoStore;