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

    

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit(event){
        event.preventDefault();
        const inputValue = this.state.input;
        console.log(inputValue);
        const songsCopy = this.state.songs;
        const filteredSongs = songsCopy.filter(song => song.title.toLowerCase().includes(inputValue));
        // call helper function to filter songs based on search
        this.setState({
            search: inputValue,
            input: '',
            songs: filteredSongs
            // set state for newly searched state
        })
        console.log(inputValue);

        // ALT implementation: filter on handleChange to automatically change table
        // for each key press

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
 