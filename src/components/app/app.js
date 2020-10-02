import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import './app.scss';
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Have a launch')
        ],
        term: ''
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {

        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArray
            }
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    }

    render() {
        const {todoData, term} = this.state;

        const visibleItem = this.search(todoData, term)

        const doneCount = this.state.todoData
            .filter((el) => el.done).length;

        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel map">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={visibleItem}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    onItemAdded={this.addItem}/>
            </div>
        )
    }
}

