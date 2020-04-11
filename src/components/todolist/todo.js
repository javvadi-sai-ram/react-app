import React from "react"


class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="list-of-todos">
            <input onChange={()=>this.props.checkTodo(this.props.eachObj)} className="check-box" type="checkbox" checked={this.props.eachObj.todoCheckStatus}/>
            {this.props.checkStatus(this.props.eachObj)}
            <button onClick={()=>this.props.removeTodo(this.props.eachObj)} className="cancel">X</button>
          </div>;
    }
}


export default Todo