import React from 'react';
import {observable,action,computed} from 'mobx';
import {observer} from 'mobx-react';

import './todoCss';
import TodoFooter from "./todoFooter"
import Todo from "./todo"


@observer class TodosList extends React.Component {

     todoId = 0;
    @observable listOfTodos=[];
    @observable todoFooterState="all";
      
    
    
    @action.bound addTodoToTodosList(event){
        if (event.key === "Enter" && event.target.value != "") {
            let updatedListOfTodos = this.listOfTodos.slice(0);
            updatedListOfTodos.push({ numOfTodos: this.todoId++, todo: event.target.value, todoCheckStatus: false, todoOnfocus: false });
            event.target.value = "";
             this.listOfTodos= updatedListOfTodos;
        }
    }
    @action.bound todoCheckedOrNot(eachObj){
        console.log("eachObj.todoOnfocus", eachObj.todoOnfocus);
        const styles = { border: "2px solid grey" };
        if (eachObj.todoCheckStatus)
            return <input className="entered-todo-checked" type="text" defaultValue={eachObj.todo} disabled/>;
        else
            return <input style={eachObj.todoOnfocus?styles:null} className="entered-todo-unchecked"  type="text" defaultValue={eachObj.todo}/>;
    }
    @action.bound checkTodo(eachObj){
        let dupList = this.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        if (eachObj.todoCheckStatus) {     
            
            dupList[index]["todoCheckStatus"] = false;
        }
        else {
            dupList[index]["todoCheckStatus"] = true;
        }
        this.listOfTodos=dupList;
    }
    @action.bound removeTodo(eachObj){
        let dupList = this.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        dupList.splice(index, 1);
        this.listOfTodos= dupList;
    }
    @action.bound onfocus(eachObj){
        let dupList = this.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        dupList[index].todoOnfocus = !dupList[index].todoOnfocus;
        this.listOfTodos= dupList ;
    }
    @action.bound allTodos(){
        this.todoFooterState= "all";
    }
    @action.bound active(){
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
  
  
  
    @action.bound todosFooter () {
        if (this.listOfTodos.length > 0)
            return <TodoFooter numOfTodos={this.numberOfItems} allTodos={this.allTodos} active={this.active} completed={this.completed} clearCompleted={this.clearCompleted} numOfCompletedTodos={this.clearCompletedCount}/>;
    }
    renderTodosList = () => {
        let dupList = this.listOfTodos.slice(0);
        let newbtn = this.todoFooterState;
        let newDupList; 
        switch (newbtn) {
            case "all":
                newDupList = dupList.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
            case "active":
                let dupList1 = dupList.filter((eachEl => eachEl.todoCheckStatus === false));
                newDupList = dupList1.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
            case "completed":
                let dupList2 = dupList.filter((eachEl => eachEl.todoCheckStatus === true));
                newDupList = dupList2.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
        }
        return newDupList;
    }
    render() {
        return <div>
        <p className="todos-styles">todos</p>
        <input className="user-input-todo" onKeyPress={this.addTodoToTodosList} type="text" placeholder="What needs to be done?"/>   
        {this.renderTodosList()}
        {this.todosFooter()}
        </div>;
    }
}
export default TodosList;