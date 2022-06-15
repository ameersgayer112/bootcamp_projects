import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {

    changeRentedStatus = () => {
        this.props.changeRentedStatus(this.props.movie.id)
    }



    render() {
        const movie = this.props.movie;
        const isRented = this.props.isRented;

        return (
            <div>
                <Link to={`/movies/${movie.id}`}>
                    <span>
                        <img className='filmImg' src={movie.img} alt="" />
                    </span>
                </Link>
                {isRented === true ? <button><i className="fa fa-plus" onClick={this.changeRentedStatus}></i></button> :
                    <button><i className="fa fa-minus" onClick={this.changeRentedStatus}></i></button>}
            </div>
        )
    }

}

export default Movie