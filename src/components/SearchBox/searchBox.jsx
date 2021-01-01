import React from 'react';
import './searchBox.css';

function SearchBox(props) {
    
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="input" value={props.input} onChange={props.handleChange}></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        
    )

    
}

export default SearchBox;