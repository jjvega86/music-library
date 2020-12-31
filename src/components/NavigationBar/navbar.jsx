import React from 'react';
import './navbar.css';

function NavBar(props){
    return(
        <div className="row">
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1">Music Library</span>
            </nav>
        </div>
    )
}

export default NavBar;