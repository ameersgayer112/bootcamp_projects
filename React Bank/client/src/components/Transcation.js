import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/Transcation.css'



class Transcation extends Component {

    delleteOperation=()=>{
        this.props.delleteOperation(this.props._id)

    }

    render() {
        let action = this.props.action;
        return (
            <div className='MyAction'>
                <h4 className='header-info'>amount:{action.amount}</h4>
          
                <h4 className='header-info'>vendor:{action.vendor}</h4>
       
                <h4 className='header-info'>category:{action.category}</h4>
              
                <button className='delletebtn' onClick={this.delleteOperation}><i class="fa fa-trash-o"></i></button>
            </div>


        )
    }

}


export default Transcation