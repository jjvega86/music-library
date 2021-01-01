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
            input: '',
            search: ''
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

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit(event){
        event.preventDefault();
        const inputValue = this.state.input;
        console.log(inputValue);
        this.setState({
            search: inputValue,
            input: ''
        })
        console.log(inputValue);

    }
    
    

    render(){
        return(
            <div className="container-fluid">
                <NavBar handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                input={this.state.input}
                />
                <Banner />
                <MusicTable songs={this.state.songs}/>
                <Footer />
            </div>
        );
    }
}

export default App;
 