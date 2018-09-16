import React from 'react';
import {Hole} from './Hole.js';

export class WhackAMole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            misses: 0,
            moleHole: null,
            message: null,
        };
        this.onClickCircle = this.onClickCircle.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentWillMount() {
        this.interval = setInterval(() => this.setState({ moleHole: Math.floor(Math.random() * 9) }), 1000); //put mole at random spot every second
    }

    onClickCircle(c) {
        let message = "";
        if(c === this.state.moleHole) {
            if(this.state.score === 9) {
                clearInterval(this.interval);
                message = "You Win!";
            } else {
                message = "Hit!";
            }
            this.setState({ moleHole: -1, score: this.state.score+1, message });
        } else {
            message = "Missed!";
            this.setState({ message, misses: this.state.misses+1 });
        }
    }

    stop() {
        clearInterval(this.interval);
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        return (
            <div>
                <h1 className="centertext">Whack-A-Mole!</h1>
                <h3 className="centertext">A more amusing visualization of stock trade timing...</h3>
                <br />
                <button onClick={this.stop}>I gIvE UP</button>
                <h4 className="centertext">{this.state.message}</h4>
                <div className="holesRow">
                    <Hole id={0} mole={this.state.moleHole === 0} onClick={() => this.onClickCircle(0)}/>
                    <Hole id={1} mole={this.state.moleHole === 1} onClick={() => this.onClickCircle(1)}/>
                    <Hole id={2} mole={this.state.moleHole === 2} onClick={() => this.onClickCircle(2)}/>
                    <br />
                </div>
                <div className="holesRow">
                    <Hole id={3} mole={this.state.moleHole === 3} onClick={() => this.onClickCircle(3)}/>
                    <Hole id={4} mole={this.state.moleHole === 4} onClick={() => this.onClickCircle(4)}/>
                    <Hole id={5} mole={this.state.moleHole === 5} onClick={() => this.onClickCircle(5)}/>
                    <br />
                </div>
                <div className="holesRow">
                    <Hole id={6} mole={this.state.moleHole === 6} onClick={() => this.onClickCircle(6)}/>
                    <Hole id={7} mole={this.state.moleHole === 7} onClick={() => this.onClickCircle(7)}/>
                    <Hole id={8} mole={this.state.moleHole === 8} onClick={() => this.onClickCircle(8)}/>
                    <br />
                </div>
                <h2 className="centertext">Total Score: {this.state.score}</h2>
                <h2 className="centertext">Total Misses: {this.state.misses}</h2>
                <h2 className="centertext">Accuracy: {this.state.score===0 ? 0 : (this.state.score / (this.state.score + this.state.misses)).toFixed(3)}</h2>
            </div>
        )
    }
}