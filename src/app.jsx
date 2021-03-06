import React, {Component} from 'react';
import axios from 'axios';
import './app.css';
import NavBar from './components/NavigationBar/navbar';
import Banner from './components/Banner/banner';
import MusicTable from './components/MusicTable/musicTable';
import Footer from './components/Footer/footer';
import SongCreator from './components/SongCreator/songCreator';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            input: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    componentDidMount(){
        axios.get('http://localhost:5000/api/songs')
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
        const results = this.filteredSongs(inputValue);
        // call helper function to filter songs based on search
        this.setState({
            input: '',
            songs: results
        })
        // ALT implementation: filter on handleChange to automatically change table
        // for each key press
    }

    filteredSongs = (search) => {
        let songsCopy = this.state.songs;
        let filteredSongs = songsCopy.filter(song =>{
            return (
                song.title.toLowerCase().includes(search.toLowerCase()) ||
                song.artist.toLowerCase().includes(search.toLowerCase()) ||
                song.genre.toLowerCase().includes(search.toLowerCase()) ||
                song.album.toLowerCase().includes(search.toLowerCase()) ||
                song.releaseDate.toLowerCase().includes(search.toLowerCase())

            );
        });

        return filteredSongs;
        
    }

    addNewSong(song){
        //let json = JSON.parse(song);
        axios.post('http://localhost:5000/api/songs', { song })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    
    render(){
        return(
            <div className="container-fluid">
                <NavBar handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                input={this.state.input}/>
                <Banner />
                <SongCreator addNewSong={this.addNewSong.bind(this)}/>
                <MusicTable songs={this.state.songs}/>
                <Footer />
            </div>
        );
    }
}

export default App;
 