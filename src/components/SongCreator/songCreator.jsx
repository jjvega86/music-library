import React from 'react';

class SongCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: '',
            genre: '',
            album: '',
            releaseDate: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.title);
    }

    handleSubmit(event){
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            genre: this.state.genre,
            album: this.state.album,
            releaseDate: this.state.releaseDate
        }

        this.props.addSong(song);
        this.setState({
            title: '',
            artist: '',
            genre: '',
            album: '',
            releaseDate: ''
        })
        event.preventDefault();
    }


    render(){
        return(
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-md-4">
                            <label>Title:</label>
                            <input type='text' name="title" value={this.state.title} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Artist:</label>
                            <input type='text' name="artist" value={this.state.artist} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Genre:</label>
                            <input type='text' name="genre" value={this.state.genre} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Album:</label>
                            <input type='text' name="album" value={this.state.album} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Release Date:</label>
                            <input type='text' name="releaseDate" value={this.state.releaseDate} 
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Add"></input>
                        </div>
                    </form>
                </div>
                
            
        );
    }
}

export default SongCreator;