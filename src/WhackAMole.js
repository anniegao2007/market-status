import React from 'react';
import {Hole} from './Hole.js';

export class WhackAMole extends React.Component {
    state = {
        score: 0,
        waitTime: null,
        moleHole: null
    }

    componentWillMount() {
        this.setState({
            waitTime: Math.floor(Math.random() * 4), //random number 0-3
            moleHole: Math.floor(Math.random() * 9) //random number 0-8
        });
    }

    render() {
        return (
            <div>
                <h1>Whack-A-Mole!</h1>
                <h3>A more amusing visualization of stock trade timing...</h3>
                <div className="holesRow">
                    <Hole id={0} mole={this.state.moleHole == 0}/>
                    <Hole id={1} mole={this.state.moleHole == 1}/>
                    <Hole id={2} mole={this.state.moleHole == 2}/>
                    <br />
                </div>
                <div className="holesRow">
                    <Hole id={3} mole={this.state.moleHole == 3}/>
                    <Hole id={4} mole={this.state.moleHole == 4}/>
                    <Hole id={5} mole={this.state.moleHole == 5}/>
                    <br />
                </div>
                <div className="holesRow">
                    <Hole id={6} mole={this.state.moleHole == 6}/>
                    <Hole id={7} mole={this.state.moleHole == 7}/>
                    <Hole id={8} mole={this.state.moleHole == 8}/>
                    <br />
                </div>
                <h2>Total Score: {this.state.score}</h2>
            </div>
        )
    }
}