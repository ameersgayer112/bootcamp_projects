import React, { Component } from 'react';

export class Letter extends Component{

    selectLetter = () =>{
        this.props.selectLetter(this.props.availableLetters)

    }
    render(){
        return (<span>
            <span>{this.props.letter}</span>
            <span className={this.props.class} onClick={this.selectLetter}>{this.props.availableLetters}</span>
        </span>)
    }

}

export default Letter
