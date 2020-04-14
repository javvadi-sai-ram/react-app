.user-input-todo {
    width: 60%;
    height: 50px;
    display: flex;
    box-shadow: 5px 5px 5px lightgrey;
    font-size: 20px;
    margin: auto;
    
}

.todos-styles {
    font-size: 120px;
    font-weight:100;
    font-family:helvetica neue;
    margin:0px;
    color: #FF6763;
    text-align: center;
    opacity:0.8;
}

p {
    margin: 0px;
}

.entered-todo-checked,
.entered-todo-unchecked {
    width: 100%;
    height: 50px;
    font-size: 20px;
    border: 0px;
}

.entered-todo-checked:disabled {
    text-decoration: line-through;
}
.entered-todo-unchecked:focus {
    border:1px solid green;
}

.list-of-todos {
    width: 62.5%;
    display: flex;
    margin: auto;
    border: 1px solid grey;
    border-radius: 5px;
}

.check-box {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    border-color: #f5f5f5;
    /*margin-right: 10px;*/
}

.cancel {
    border: none;
    font-size: 24px;
    color: #4d4d4d;
}

.delete-completed-todos:hover,
.all-todos:hover,
.completed-todos:hover,
.present-todos:hover {
    height: 30px;
    border-radius: 5px;
    border-color: rgba(175, 47, 47, 0.2);
}

.present-todos,
.completed-todos,
.delete-completed-todos,
.numOfItemsLeft,
.itemsLeft,
.all-todos {
    background-color: white;
    color: #777777;
    font-size: 14px;
    border-color: white;
}

.todos-app-bottom {
    height: 60px;
    width: 62%;
    background-color: white;
    
    margin: auto;
    border: 1px solid black;
    height: 50px;
    border-radius: 5px
}
.footer-things{
    display:flex;
    border: 1px solid grey;
    justify-content:space-around;
    align-items:center;
    height: 60px;
    width: 62%;
    border-radius: 5px;
    height: 50px;
    margin: auto;
}