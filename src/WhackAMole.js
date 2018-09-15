import React from 'react';

export class WhackAMole extends React.Component {
    state = {
        score: 0,
        waitTime: null,
        moleHole: null
    }

    componentWillMount() {
        this.setState({
            waitTime: Math.floor(Math.random() * 4), //random number 0-3
            moleHole: Math.floor(Math.random() * 10) //random number 0-9
        });
    }

    render() {
        return (
            <div>
                <Hole />
                <Hole />
                <Hole />
                <br />
                <Hole />
                <Hole />
                <Hole />
                <br />
                <Hole />
                <Hole />
                <Hole />
                <br />
                <h2>Total Score: {this.state.score}</h2>
            </div>
        )
    }
}