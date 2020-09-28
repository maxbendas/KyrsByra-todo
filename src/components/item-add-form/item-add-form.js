import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import "./item-add-form.css"

export default class ItemAddForm extends Component {
    render() {
        const {onItemAdded} = this.props;
        return(
            <div className="item-add-form">
                <Button onClick={()=>onItemAdded('hello')} variant="contained" color="primary">Add Element</Button>
            </div>
        )
    }
}