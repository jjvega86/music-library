import React from 'react';
import SearchBox from '../SearchBox/searchBox';
import './navbar.css';

function NavBar(props){
    return(
        <div className="row">
            <nav className="navbar navbar-dark bg-dark">
                <div className="navbar-brand"></div>
                <div className="float-right"><SearchBox setFilterValue={props.setFilterValue.bind(this)} /></div> 
            </nav>
        </div>
    )
}

export default NavBar;