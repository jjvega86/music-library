import React, {Component} from 'react';
import axios from 'axios';
import './app.css';
import NavBar from './components/NavigationBar/navbar';
import Banner from './components/Banner/banner';
import MusicTable from './components/MusicTable/musicTable';
import Footer from './components/Footer/footer';

class App extends Component{
    state = {
        songs: [],
        filterStr: ''
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
            [this.state.filterStr]: value
        });
        console.log(this.state.filterStr);
    }
    
    

    render(){
        return(
            <div className="container-fluid">
                <NavBar setFilterValue={this.setFilterValue.bind(this)}/>
                <Banner />
                <MusicTable songs={this.state.songs}/>
                <Footer />
            </div>
        );
    }
}

export default App;
 