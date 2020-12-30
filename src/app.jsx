import React, {Component} from 'react';
import './app.css';
import Banner from './components/Banner/banner';
import Footer from './components/Footer/footer';

class App extends Component{
    state = {}
    render(){
        return(
            <div className="container-fluid">
                <Banner />
                <Footer />
            </div>
        );
    }
}

export default App;
 