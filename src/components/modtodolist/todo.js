import React from "react";
import {observer} from "mobx-react";
//import TodoStores from "../TodoStore/todoStore.js"

@observer
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.eachObj.todoCheckStatus);
        return <div className="list-of-todos">
            <input onChange={()=>this.props.checkTodo(this.props.eachObj)} className="check-box" type="checkbox" checked={this.props.eachObj.todoCheckStatus}/>
             <input className="entered-todo-checked" type="text" defaultValue={this.props.eachObj.todo} disabled={this.props.eachObj.todoCheckStatus} onChange={this.props.eachObj.updateTodo} />;
            <button onClick={()=>this.props.removeTodo(this.props.eachObj)} className="cancel">X</button>
          </div>;
    }
}


export default Todo;