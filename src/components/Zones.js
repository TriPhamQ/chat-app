import React, { Component } from 'react';
import Zone from './Zone';

class Zones extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {name: 'Zone 1', zip: '90001', numComments: 10},
                {name: 'Zone 2', zip: '90002', numComments: 15},
                {name: 'Zone 3', zip: '90003', numComments: 20},
                {name: 'Zone 4', zip: '90004', numComments: 25}
            ]
        };
    };

    render() {
        const listItems = this.state.list.map((zone, index) => {
            return (
                <li><Zone currentZone={zone} /></li>
            );
        });

        return (
            <div>
                <ol>
                    {listItems}
                </ol>
            </div>
        );
    };
};

export default Zones;
