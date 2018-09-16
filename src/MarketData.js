import React from 'react';
import axios from 'axios';

const numCompanies = 29;

export class MarketData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCompanies: [],
            myCompanies: [],
            details: [],
            seeAll: true,
        }
        this.seeDetails = this.seeDetails.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        let allCompanies = [];
        const url = "http://localhost:3000/proxy/api/v3/datatables/ZACKS/AR.json?api_key=sEpgZsqAFy4-iptWfY2V";
        //const url = "https://www.financialmoles.herokuapp.com/proxy/api/v3/datatables/ZACKS/AR.json?api_key=sEpgZsqAFy4-iptWfY2V";
        axios.get(url).then(res => {
            for(let i = 0; i < numCompanies; i++) {
                let company = res.data.datatable.data[i];
                company.push("none");
                allCompanies.push(company);
            }
            this.setState({ allCompanies });
        });
    }

    toggle() {
        let mine = this.state.myCompanies;
        if(!this.state.seeAll) {
            for(let i = 0; i < mine.length; i++) {
                mine[i][30] = "none";
            }
            mine = [];
        }
        this.setState({ myCompanies: mine, seeAll: !this.state.seeAll });
    }

    seeDetails(c) {
        let comps = this.state.myCompanies;
        let index = comps.indexOf(c);
        if(index === -1) {
            comps.push(c);
            c[30] = "green";
        } else {
            c[30] = "none"; //not showing up
            comps.splice(index, 1);
        }
        this.setState({ myCompanies: comps });
    }

    render() {
        if(this.state.seeAll) {
            return (
                <div className="app">
                    <h1 className="centertext">All Companies</h1>
                    <h3>Click on companies you are interested in, then press "Show Details" for more information.</h3>
                    <button className="marketButton" onClick={this.toggle}>Show Details</button> <br /> <br />
                    <ul>
                        {this.state.allCompanies.map(c => (
                            <div>
                                <li key={c[1]} style={{backgroundColor: c[30]}}onClick={() => this.seeDetails(c)}>{c[1]}: {c[3]}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="app">
                    <h3>Key:</h3>
                    <p><b>-2</b>: Strong Sell</p>
                    <p><b>-1</b> Sell</p>
                    <p><b>0</b>: Neutral</p>
                    <p><b>1</b>: Buy</p>
                    <p><b>2</b>: Strong Buy</p>

                    <br /><br/>
                    <button className="marketButton" onClick={this.toggle}>Show All</button>
                    <br /><br />

                    <h1 className="centertext">Selected Companies</h1>
                    <ul>
                        {this.state.myCompanies.map(c => (
                            <div>
                                <li key={c[1]}>{c[1]}: {c[3]} <br /> <mark>Rank: {Math.round(c[26])-3}</mark></li>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}