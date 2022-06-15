import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Transcation from './Transcation';





class Transcations extends Component {

    render() {
        let actions = this.props.actions;
        return (
            <div className='transActions-container'>
                <div className='action-container'>
                    {actions.map((action,i) => {
                        return (
                            <div className='action'>
                                <Transcation key={i} action={action} _id={action.id} delleteOperation={this.props.delleteOperation} />
                                <br></br>
                            </div>

                        )
                    })}

                </div>

            </div>
        )
    }

}


export default Transcations