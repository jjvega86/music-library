import React from 'react';
import './searchBox.css';

function SearchBox(props){
    return(
        <div className="container">
            <form className="form-inline">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        
    )
}

export default SearchBox;