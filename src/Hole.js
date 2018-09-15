import React from 'react';
import molecartoon from './molecartoon.png';

export class Hole extends React.Component {
    render() {
        if(this.props.mole) {
            return (
                <div className="WAMhole" onClick={this.props.onClick}>
                    <img height={80} width={80} src={molecartoon} />
                </div>
            ); 
        } else {
            return <div className="WAMhole" onClick={this.props.onClick}></div>;
        }
    }
}