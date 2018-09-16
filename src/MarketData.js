import React from 'react';
import axios from 'axios';

export class MarketData extends React.Component {
    state = {
        marketdata: []
    };

    componentDidMount() {
        let myData = [];
        const url = "http://localhost:3000/proxy/api/v3/datatables/ZACKS/AR.json?api_key=sEpgZsqAFy4-iptWfY2V";
        axios.get(url).then(res => {
            for(let i = 0; i < 29; i++) {
                let company = res.data.datatable.data[i];
                myData.push(`${company[1]}: ${company[3]}`);
            }
            this.setState({ marketdata: myData });
        });
    }

    render() {
        return (
            <div>
                <h1 className="centertext">Companies!</h1>
                <ul>
                    {this.state.marketdata.map(c => <li key={c}>{c}</li>)}
                </ul>
            </div>
        );
    }
}