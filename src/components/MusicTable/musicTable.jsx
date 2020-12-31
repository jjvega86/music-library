import React, {Component} from 'react';
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
            console.log(res.status);
            this.setState({songs});
        })
    }
    render(){
        return(
            
            <table className="table table-light">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Album</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Release Date</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.songs.map(song => 
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.releaseDate}</td>
                </tr>                          
                )}                 
                </tbody>           
            </table>
        )

    }
}

export default MusicTable;