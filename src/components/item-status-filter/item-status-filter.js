import React, {Component} from "react";
import {ButtonGroup, Button} from '@material-ui/core';
import './item-status-filter.css'


export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {

        const {filter, onFilterChange}= this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter===name;
            const clazz = isActive ? "contained" : ""
            return (
                <Button variant={clazz}
                        onClick={()=>onFilterChange(name)}
                        key={name}>{label}</Button>
            )
        })
        return (
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                {buttons}
            </ButtonGroup>
        )
    }
}