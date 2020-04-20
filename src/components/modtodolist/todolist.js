import React from 'react';
import {observer} from 'mobx-react';
import {observable,action,computed,reaction} from 'mobx';

import TodoStores from "../../stores/TodoStore/todoStore";
import './todo.css';
import Todo from "../../components/modtodolist/todo";
import Loaders from "./loaders";
import NetworkError from "./Network";
//import TodoFooter from "./todoFooter.js";
//import Todo from "./todo";



@observer 
class TodosList extends React.Component {
    @observable isError;
    
    
   componentDidMount(){
       this.fetchingData()
    }
    fetchingData=()=>{
        this.isError=false
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(json=>this.jsonData(json))
        .catch(error=>this.isError=true)
    }
    
    jsonData(json){
        TodoStores.jsonDataTodoList(json)
    }
    
    render() {
        return <div>
        <p className="todos-styles">todos</p>
        <input className="user-input-todo" onKeyPress={TodoStores.addTodoToTodosList} type="text" placeholder="What needs to be done?"/> 
        {this.isError?
              <div>
                {<NetworkError fetchingData={this.fetchingData}/>}
              </div>:
             <div>
                {TodoStores.isLoading?<Loaders/>:null}
                {TodoStores.numberOfItems>0?TodoStores.renderTodosList:null}
                {TodoStores.todosFooter()}
            </div>}
            </div>
        }
}
export default TodosList;