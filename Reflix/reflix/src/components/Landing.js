import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../styles/Landing.css'


class Landing extends Component {

    render() {
        return (
            <div id="home-container">
                <h1 className='homeTitle'>WHO'S WATCHING?</h1>
                <div id="users-container">
                    {this.props.users.map(user => {
                        return <div className='user' key={user.name}>
                             <Link to={`/catalog/${user.name}`}>
                            <span>{user.name}
                                <img className='user-img' src={user.imgUrl} alt=""/>
                            </span>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Landing