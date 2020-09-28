import React from "react";
import './search-panel.css'
import TextField from "@material-ui/core/TextField";

const SearchPanel = ()=>{
    return (
        <TextField id="outlined-basic" label="type to search" variant="outlined" />
        // <input className="form-control search-input" type="text" placeholder="type to search"/>
        )
}

export default SearchPanel;

