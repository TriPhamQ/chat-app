import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            zone: {
                name: '',
                zip: ''
            }
        };
    };
    componentDidMount() {
        console.log('Component Did Mount');
        superagent
        .get('/api/zone')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) {
                alert('ERROR: ' + err)
            }
            else {
                console.log(response.body);
                let results = response.body.results;
                this.setState({
                    list: results
                })
            }
        })
    };
    submitZone(){
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.zone);
        this.setState({
            list: updatedList
        });
    };
    updateZone(event) {
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;
        this.setState({
            zone: updatedZone
        });
    };

    render() {
        const listItems = this.state.list.map((zone, index) => {
            return (
                <li key={index}><Zone currentZone={zone} /></li>
            );
        });

        return (
            <div>
                <ol>
                    {listItems}
                </ol>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zone Name"></input><br />
                <input id="zip" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"></input><br />
                <button onClick={this.submitZone.bind(this)} className="btn btn-info">Submit Zone</button>
            </div>
        );
    };
};

export default Zones;
