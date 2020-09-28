import React, {Component} from "react";
import { ButtonGroup, Button } from '@material-ui/core';
import './item-status-filter.css'


export default class ItemStatusFilter extends Component {
    render(){
        return (
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Done</Button>
            </ButtonGroup>
        )
    }
}