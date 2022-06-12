import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MovieDetail.css'


class MovieDetail extends Component {
    render() {
        const movie = this.props.movie

        return(
        <div>
            <div className="MovieDetail-container">
                <h1 className='movieTitle'>{movie.title}({movie.year})</h1>
                <img className='movieImg' src={movie.img} alt="" />
                <br></br>
            </div>
            <p className='movieDescription'>about : {movie.descrShort}</p>

        </div>)


    }
}

export default MovieDetail