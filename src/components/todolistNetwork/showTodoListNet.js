import React from "react";
import {observer,inject} from "mobx-react"
import {TodoFooter,TodoFooterNoData} from "./todoFooterNet.js"; 

@inject('todoStores')
@observer
class ShowTodoList extends React.Component{
    render(){
        const {todosCount,numberOfItems,allTodos,active,completed,clearCompleted,clearCompletedCount}=this.props.todoStores;
        return (
          
        <div>    
            <div>
            {this.props.todoStores.renderTodosList}
            </div>
            <div>
            {todosCount>0?
            <TodoFooter numOfTodos={numberOfItems} allTodos={allTodos} active={active} completed={completed} clearCompleted={clearCompleted} numOfCompletedTodos={clearCompletedCount}/>:
            <TodoFooterNoData/>}
            </div>
        </div>
    )
    }
}


export default ShowTodoList;




   