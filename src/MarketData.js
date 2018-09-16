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
        const url = "https://www.quandl.com/api/v3/datatables/ZACKS/AR.json?api_key=sEpgZsqAFy4-iptWfY2V";
        //const url = "https://financialmoles.herokuapp.com/proxy/api/v3/datatables/ZACKS/AR.json?api_key=sEpgZsqAFy4-iptWfY2V";
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
                <div>
                    <h1 className="centertext">All Companies</h1>
                    <ul>
                        {this.state.allCompanies.map(c => (
                            <div>
                                <li key={c[1]} style={{backgroundColor: c[30]}}onClick={() => this.seeDetails(c)}>{c[1]}: {c[3]}</li>
                            </div>
                        ))}
                    </ul>
                    <button onClick={this.toggle}>Show Details</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="centertext">Selected Companies</h1>
                    <ul>
                        {this.state.myCompanies.map(c => (
                            <div>
                                <li key={c[1]}>{c[1]}: {c[3]} Rank: {c[26]}</li>
                            </div>
                        ))}
                    </ul>
                    <button onClick={this.toggle}>Show All</button>
                </div>
            );
        }
    }
}