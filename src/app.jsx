import React, {Component} from 'react';
import './app.css';
import NavBar from './components/NavigationBar/navbar';
import Banner from './components/Banner/banner';
import Footer from './components/Footer/footer';

class App extends Component{
    state = {}
    render(){
        return(
            <div className="container-fluid">
                <NavBar />
                <Banner />
                <Footer />
            </div>
        );
    }
}

export default App;
 