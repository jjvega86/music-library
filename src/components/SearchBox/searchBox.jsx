import React from 'react';
import './searchBox.css';

class SearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.filter);


    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.filter);
        const filterValue = this.state.filter;
        this.props.setFilterValue(filterValue);
        this.setState({
            filter: ''
        })

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="filter" value={this.state.filter} onChange={this.handleChange}></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            
        )

    }
}

export default SearchBox;