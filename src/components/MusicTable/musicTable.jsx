import React from 'react';
import axios from 'axios';
import './musicTable.css';

class MusicTable extends Component{
    state = {
        songs: []
    }

    componentDidMount(){
        axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(res => {
            const songs = res.data;
            this.setState({songs});
        })
    }
    render(){
        return(
            <ul>
                {this.state.songs.map(song => <li>{song.title}</li>)}
            </ul>
        )

    }
}

export default MusicTable;