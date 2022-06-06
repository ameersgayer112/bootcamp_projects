import React, { Component } from 'react';

export class EndGame extends Component{


    render(){
        let lettersArray = this.props.solution.split("");
        let letters = this.props.solution.split("")
        let checkcounter = 0

        lettersArray.map((l) => this.props.letterStatus[l] === true ? checkcounter++ : "")


        return (
        <div>
            <span>{this.props.score  <= 0 ? <span style={{color : "red"}}> You are Looser</span> 
            : lettersArray.length === checkcounter ? <span style={{color : "green"}}>Yes u are Winner</span> 
            : <span style={{color : "red"}}> You are Looser</span>   }</span>
        </div>
    )}
}

export default EndGame