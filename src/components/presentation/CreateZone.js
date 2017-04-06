import React, { Component } from 'react';

class CreateZone extends Component {
    constructor() {
        super();
        this.state = {
            zone: {
                name: '',
                zip: ''
            }
        };
    };
    updateZone(event) {
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;
        this.setState({
            zone: updatedZone
        });
    };
    submitZone(event) {
        console.log(this.state.zone);
        this.props.onCreate(this.state.zone);
    };
    render() {
        return (
            <div>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zone Name"></input><br />
                <input id="zip" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"></input><br />
                <button onClick={this.submitZone.bind(this)} className="btn btn-info">Submit Zone</button>
            </div>
        );
    };
};

export default CreateZone;
