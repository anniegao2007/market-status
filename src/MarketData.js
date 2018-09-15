import React from 'react';
import axios from 'axios';

export class MarketData extends React.Component {
    componentDidMount() {
        axios.get("https://www.quandl.com/api/v3/datatables/ZACKS/AR.json?api_key=sEpgZsqAFy4-iptWfY2V")
            .then(res => {

        });
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}