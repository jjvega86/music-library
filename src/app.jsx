import React, {Component} from 'react';
import './app.css';
import Footer from './components/Footer/footer';

class App extends Component{
    state = {}
    render(){
        return(
            <div className="container-fluid">
                <h1 className="center">Music Library 3.0</h1>
                <Footer />
            </div>
       

        );
    }
}

export default App;
 