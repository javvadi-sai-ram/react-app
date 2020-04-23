import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable,action,computed,reaction} from 'mobx';
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
//import TodoStores from "../../stores/TodoStore/todoStore";
import './todoNet.css';
//import Todo from "../../components/modtodolist/todo";
//import Loaders from "./loadersNet";
//import NetworkError from "./NetworkNet";
//import TodoFooter from "./todoFooter.js";
//import Todo from "./todo";
import NoDataView from "../common/NoDataView";
import ShowTodoList from "./showTodoListNet";


@inject('todoStores')
@observer 
class TodosList extends React.Component {
    @observable isError;
    
    
   componentDidMount(){
       this.doNetWorkCalls();
    }
    
    componentWillUnmount(){
        this.props.todoStores.clearStore();
    }
 
    addTodo=(event)=>{
         this.props.todoStores.addTodoToTodosList(event);
    }
    
    
    doNetWorkCalls=()=>{
        this.props.todoStores.getTodoList();
    }
    
    
    renderTodoList=()=>{
        const {todos}=this.props.todoStores;
        console.log("fjjgg",this.props.todoStores.renderTodoList)
        if(todos.length===0){
            return <NoDataView/>
        }
        else{
          return <ShowTodoList/> 
        }
         
        
    }
    
    
    render() {
        const {getTodoApiStatus,getTodoApiError,listOfTodos}=this.props.todoStores;
       // console.log(listOfTodos)
       // console.log('-->',getTodoApiStatus)
        return <div>
        <div>
        <p className="todos-styles">todos</p>
        <input className="user-input-todo" onKeyPress={this.addTodo} type="text" placeholder="What needs to be done?"/> 
        </div>
        <div>
        <LoadingWrapperWithFailure
            apiStatus={getTodoApiStatus}
            apiError={getTodoApiError}
            onRetryClick={this.doNetWorkCalls}
            renderSuccessUI={this.renderTodoList}
            />
            </div>
            </div>
        }
}
export default TodosList;