import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from "./src/App.js"

function FilterBox(props) {
    return (
        <div>
            <span>Filter Age</span>
            <br></br>
            <input onChange = {props.handleInput} type = "text" />
        </div>
    )
}

export default FilterBox;