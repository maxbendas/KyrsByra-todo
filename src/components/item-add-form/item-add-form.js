import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import "./item-add-form.css"
import TextField from "@material-ui/core/TextField";

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmitLabel = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label : ''
        })
    }

    render() {

        return (
            <form className="item-add-form"
                  onSubmit={this.onSubmitLabel}>

                <TextField onChange={this.onLabelChange}
                           label="What needs to be done"
                           variant="outlined"
                           color="primary"
                           value={this.state.label}/>
                <Button type="submit" variant="outlined" color="primary">Add
                    Element</Button>
            </form>
        )
    }
}