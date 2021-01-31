import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from "./src/App.js"

function FilterBox(props) {
    return (
        <div>
            <span>Age</span>
            <br></br>
            <input onChange = {props.handleInput} value = {props.filerValue} type = "text" />
            <button onClick = {props.submitFilter}>
                Filter By Age
            </button>
        </div>
    )
}

export default FilterBox;