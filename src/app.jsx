import React, {Component} from 'react';
import axios from 'axios';
import './app.css';
import NavBar from './components/NavigationBar/navbar';
import Banner from './components/Banner/banner';
import MusicTable from './components/MusicTable/musicTable';
import Footer from './components/Footer/footer';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            filter: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    componentDidMount(){
        axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(res => {
            const songs = res.data;
            console.log(res.status);
            this.setState({songs});
        })
    }

    // turn SearchBox into class component with state
    // write a filter method that changes the songs stateful variable based on user input from SearchBox
    // pass that method via props to SearchBox and include it in the handleSubmit method

    setFilterValue = (value) => { //this logs when state changes but doesn't bind the value
        this.setState({
            filter: value
        })
        console.log(this.filter);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
        //console.log(this.state.filter);

    }

    handleSubmit(event){
        event.preventDefault();
        const filterValue = this.state.filter;
        console.log(filterValue);
        this.setFilterValue(filterValue);
        this.setState({
            filter: ''
        })

    }
    
    

    render(){
        return(
            <div className="container-fluid">
                <NavBar handleChange={() => this.handleChange()}
                handleSubmit={() => this.handleSubmit()}
                filter={this.state.filter}
                />
                <Banner />
                <MusicTable songs={this.state.songs}/>
                <Footer />
            </div>
        );
    }
}

export default App;
 