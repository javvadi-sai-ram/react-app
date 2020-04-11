import React from 'react';
import './todo.css';
//import TodoFooter from "./todoFooter.js";
//import Todo from "./todo.js";
import TodoStores from "../../stores/TodoStore/todoStore.js";
import {observable,action,computed,reaction} from 'mobx';
import {observer} from 'mobx-react';

@observer 
class TodosList extends React.Component {
     
    render() {
        return <div>
        <p className="todos-styles">todos</p>
        <input className="user-input-todo" onKeyPress={TodoStores.addTodoToTodosList} type="text" placeholder="What needs to be done?"/>   
        {TodoStores.renderTodosList()}
        {TodoStores.todosFooter()}
        </div>;
    }
}
export default TodosList;