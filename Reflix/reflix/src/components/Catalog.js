import React, { Component } from 'react';
import Movie from './Movie'
import { Link } from 'react-router-dom';
import '../styles/Catalog.css'


class Catalog extends Component {

    constructor() {
        super();
        this.state = {
            searchInput: ""
        }
    }


    changeRentedStatus = (moveyID) => {
        let userName = this.props.match.params.userName
        this.props.changeRentedStatus(userName, moveyID)

    }

    dosearching = (event) => {
        let input = event.target.value;
        this.setState({
            searchInput: input
        })
    }

    render() {
        const userName = this.props.match.params.userName;
        const users = this.props.items.users;
        const user = users.find(u => u.name === userName);
        let budget = user.budget;
        let movies = this.props.items.movies;
        let searchMovies = movies.filter((m) => m.title.toLowerCase().includes(this.state.searchInput.toLowerCase()));
        console.log(searchMovies)

        console.log(user)
        return (
            <div id="catlog-container">
                <div>
                    <input type="text" placeholder="Search.." value={this.state.searchInput} onChange={this.dosearching}></input>
                    <button className='btnsearch'>Search</button>
                </div>

                <h6 className='budgetTitle'>Budget:{budget}$</h6>
                <div id="movies-container">
                    <div className='rentedMovie-container'>
                        <h3 className='rentedTitle'>Rented : </h3>
                        <div className='renteds-container'>
                            {this.props.items.movies.map(movey => {
                                return movey.isRented === true ?
                                    <div className='rentedMovie'>
                                        <Movie movie={movey} updateRentedMovies={this.updateRentedMovies}
                                            isRented={false} changeRentedStatus={this.changeRentedStatus} />
                                    </div> : ""
                            })}
                        </div>

                    </div>
                    <div className='catalogMovies-container'>
                        <h3 className='catalogTitle'>Catalog: </h3>
                        <div id='catalog-container'>
                            {searchMovies.map(movey => {
                                return <div className='film'>
                                    <Movie movie={movey} updateRentedMovies={this.updateRentedMovies}
                                        isRented={true} changeRentedStatus={this.changeRentedStatus} />
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

export default Catalog