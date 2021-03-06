import React from "react";

class TodoFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    clearCompleted = () => {
        if (this.props.numOfCompletedTodos> 0)
            return <button onClick={this.props.clearCompleted} className="delete-completed-todos">Clear completed</button>;
    }
    render() {
        return <div>
                   <div className="footer-things">
                            <p className="itemsLeft">items left:{this.props.numOfTodos}</p>
                            <button onClick={this.props.allTodos} className="all-todos">All</button>
                            <button onClick={this.props.active} className="present-todos">Active</button>
                            <button onClick={this.props.completed} className="completed-todos">Completed</button>
                            {this.clearCompleted()}    
                        </div>
                        
                </div>;
    }
}

export default TodoFooter