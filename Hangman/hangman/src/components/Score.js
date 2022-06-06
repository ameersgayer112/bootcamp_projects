import React, { Component } from 'react';
import'../App.css';

export class Score extends Component{

    
  colorScoreFunc =(score)=>{
    let newScoreColor = "green"
    let currentScore = this.props.score
    if(currentScore >= 80){
      newScoreColor = "green"

    }else if(currentScore >= 50 && currentScore < 80){
      newScoreColor = "yellow"
    }else{
      newScoreColor = "red"
    }
    return newScoreColor;

}

    render(){
        let newColor = this.colorScoreFunc(this.props.scor)
        return (
        <div className='score'>
            <em style={{ color: newColor }}>Score:{this.props.score}</em>
        </div>
        )
    }
}


export default Score