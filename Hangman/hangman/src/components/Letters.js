import React, { Component } from 'react';
import { Letter } from './Letter'


export class Letters extends Component {

    render() {
        const letters = Object.keys(this.props.letterStatus)
        const lettersStatus = Object.values(this.props.letterStatus)
        return (
            <div>
                <h1>Available Letters</h1>
                <span>{letters.map((char, i) =>
                    <Letter selectLetter={this.props.selectLetter} key={char} availableLetters={char}
                        class={lettersStatus[i] !== false ? "selcted" : "notSelected"} />)}
                </span>

            </div>
        )
    }
}

export default Letters