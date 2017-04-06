import React, { Component } from 'react';
import { Zone, CreateZone } from '../presentation';
import { APIManager } from '../../utils';

class Zones extends Component {
    constructor() {
        super();
        this.state = {
            selected: 0,
            list: []
        };
    };
    componentDidMount() {
        APIManager.get('/api/zone', null, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message)
            }
            else {
                this.setState({
                    list: response.results
                });
            };
        });
    };
    submitZone(zone){
        let newZone = Object.assign({}, zone);
        APIManager.post('/api/zone', newZone, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message);
                return
            }
            else {
                let updatedList = Object.assign([], this.state.list);
                updatedList.push(response.result);
                this.setState({
                    list: updatedList
                });
            };
        });
    };
    selectZone(index) {
        this.setState({
            selected: index
        });
    };

    render() {
        const listItems = this.state.list.map((zone, index) => {
            let selected = (index == this.state.selected);
            return (
                <li key={index}><Zone index={index} select={this.selectZone.bind(this)} isSelected={selected} currentZone={zone} /></li>
            );
        });

        return (
            <div>
                <ol>
                    {listItems}
                </ol>
                <CreateZone onCreate={this.submitZone.bind(this)} />
            </div>
        );
    };
};

export default Zones;
