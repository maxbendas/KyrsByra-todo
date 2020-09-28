import React, {Component} from "react";
import "./todo-list-item.scss"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class TodoListItem extends Component {


    render() {
        const {label, onDeleted, done, important, onToggleImportant, onToggleDone} = this.props;

        let classNames = ''
        if (done) {
            classNames = 'done'
        }
        if (important) {
            classNames += ' important'
        }
        return (
            <span>
                <div>
                    <ListItem button>
                        <ListItemText className={classNames}
                                      primary={label}
                                      onClick={onToggleDone}/>
                        <IconButton color="primary" onClick={onDeleted}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton color={important ? "secondary" : "primary"} onClick={onToggleImportant}>
                            <PriorityHighIcon/>
                        </IconButton>
                    </ListItem>
                </div>
            </span>
        )
    }
}


