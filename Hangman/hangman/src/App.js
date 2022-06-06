import React, { Component } from 'react';
import './App.css';
import { Solution } from './components/Solution';
import { Letters } from './components/Letters';
import { EndGame } from './components/EndGame';
import { Score } from './components/Score'
import Letter from './components/Letter';


export class App extends Component {
  constructor() {
    super();

    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "BYTES",
        hint: 'testing'
      },

      score: 100,
      scoreColor : "green" 
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus

  }
  updateScore = (letter) => {
    let newScore;
    let currentScore = this.state.score;
    if (this.state.solution.word.includes(letter)) {
      newScore = this.state.score + 5;
    }
    else {
      newScore = this.state.score - 20;
    }
    this.setState({
      score: newScore
    })
  }

  selectLetter = letter => {

    let newLetterStatus = this.state.letterStatus;
    newLetterStatus[letter] = true;
    this.updateScore(letter)

    this.setState({
      letterStatus: newLetterStatus
      
    })
  }


  render() {

    console.log(this.state.letterStatus)
    return (
      <div className="app">
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/>
        <EndGame letterStatus={this.state.letterStatus} solution={this.state.solution.word}
         score={this.state.score}/>
   

      </div>



    )
  }


}


export default App;
