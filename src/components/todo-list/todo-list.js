import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'
import List from "@material-ui/core/List";


const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const elements = todos.map((item) => {

            const {id, ...itemProps} = item;

            return (

                <li key={id} className="list-group-item">
                    <TodoListItem {...itemProps}
                                  onDeleted={() => onDeleted(id)}
                                  onToggleImportant={() => onToggleImportant(id)}
                                  onToggleDone={() => onToggleDone(id)}/>
                </li>

            )
        }
    )
    return (
        <List component="nav" aria-label="main mailbox folders">
            {elements}
        </List>
    )
}

export default TodoList;