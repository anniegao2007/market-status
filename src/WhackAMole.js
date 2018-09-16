import React from 'react';
import {Hole} from './Hole.js';

export class WhackAMole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            hits: 0,
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
            let delta = Math.floor(Math.random() * 10) - 3;
            if(this.state.hits === 9) {
                clearInterval(this.interval);
                message = `Game Over. Your score is ${this.state.score}.`;
            } else {
                message = `Hit! Your score just increased by ${delta}!`;
            }
            this.setState({ moleHole: -1, hits: this.state.hits+1, score: this.state.score+delta, message });
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
            <div className="centertext">
                <h1>Whack-A-Mole!</h1>
                <h3>A more amusing visualization of stock trade timing...</h3>
                <p>
                    The rules are simple. The moles are fast. You will miss many of them. Just like you will probably miss many prime stocktrading opportunities.
                    Each opportunity you do seize is a risk, however. You do not know how much you will win or lose.
                    This game ends when you reach 20 points.
                    Good luck, grasshopper.
                </p>
                <br />
                <button className="marketButton" onClick={this.stop}>I gIvE UP</button>
                <h4>{this.state.message}</h4>
                <table className="table">
                    <tr className="holesRow">
                        <Hole id={0} mole={this.state.moleHole === 0} onClick={() => this.onClickCircle(0)}/>
                        <Hole id={1} mole={this.state.moleHole === 1} onClick={() => this.onClickCircle(1)}/>
                        <Hole id={2} mole={this.state.moleHole === 2} onClick={() => this.onClickCircle(2)}/>
                        <br />
                    </tr>
                    <tr className="holesRow">
                        <Hole id={3} mole={this.state.moleHole === 3} onClick={() => this.onClickCircle(3)}/>
                        <Hole id={4} mole={this.state.moleHole === 4} onClick={() => this.onClickCircle(4)}/>
                        <Hole id={5} mole={this.state.moleHole === 5} onClick={() => this.onClickCircle(5)}/>
                        <br />
                    </tr>
                    <tr className="holesRow">
                        <Hole id={6} mole={this.state.moleHole === 6} onClick={() => this.onClickCircle(6)}/>
                        <Hole id={7} mole={this.state.moleHole === 7} onClick={() => this.onClickCircle(7)}/>
                        <Hole id={8} mole={this.state.moleHole === 8} onClick={() => this.onClickCircle(8)}/>
                        <br />
                    </tr>
                </table>
                <h2>Total Score: {this.state.score}</h2>
                <h2>Total Hits: {this.state.hits}</h2>
                <h2>Total Misses: {this.state.misses}</h2>
                <h2>Accuracy: {this.state.hits===0 ? 0 : (this.state.hits / (this.state.hits + this.state.misses)).toFixed(3)}</h2>
            </div>
        )
    }
}