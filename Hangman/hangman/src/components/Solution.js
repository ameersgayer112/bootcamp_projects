import React, { Component } from 'react';
import Letter from './Letter';


export class Solution extends Component {
    render() {

        let lettersArray = this.props.solution.word.split("");
        return (
        <div>
            {lettersArray.map((l, i) => this.props.letterStatus[l] === false ?
                <span> <Letter key={i} letter={'_'} /></span>:<span><Letter key={l} letter={l} /></span>)}
            <div>Hint:{this.props.solution.hint}</div>

        </div>
        )
    }
}

export default Solution