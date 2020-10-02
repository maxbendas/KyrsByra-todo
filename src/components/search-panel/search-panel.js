import React from "react";
import './search-panel.css'
import TextField from "@material-ui/core/TextField";

export default class SearchPanel extends React.Component {
    state = {
        term:''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        return (
            <TextField id="outlined-basic"
                       label="type to search"
                       variant="outlined"
            onChange={this.onSearchChange}/>
            // <input className="form-control search-input" type="text" placeholder="type to search"/>
        )
    }
}