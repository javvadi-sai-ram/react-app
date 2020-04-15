import React from 'react';
import {observer} from 'mobx-react';
//import {observable,action,computed,reaction} from 'mobx';

import TodoStores from "../../stores/TodoStore/todoStore";
import './todo.css';
//import Todo from "../../components/modtodolistodo";
//import TodoFooter from "./todoFooter.js";
import Todo from "./todo";




@observer 
class TodosList extends React.Component {
     renderTodosList=()=>{
         return TodoStores.renderTodosList.map((eachObj)=><Todo key={eachObj.id} eachObj={eachObj} checkTodo={eachObj.checkTodo} />)
     }
    render() {
        return <div>
        <p className="todos-styles">todos</p>
        <input className="user-input-todo" onKeyPress={TodoStores.addTodoToTodosList} type="text" placeholder="What needs to be done?"/>   
        {this.renderTodosList()}
        {TodoStores.todosFooter()}
        </div>;
    }
}
export default TodosList;