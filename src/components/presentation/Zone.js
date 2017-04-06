import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component {
    onSelectTitle(event) {
        event.preventDefault();
        this.props.select(this.props.index);
    };
    render() {
        const zoneStyle = styles.zone;
        const title = (this.props.isSelected) ? <a href="#" style={zoneStyle.title}>{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>;

        return (
            <div onClick={this.onSelectTitle.bind(this)} style={zoneStyle.container}>
                <h2 style={zoneStyle.header}>{title}</h2>
                <span className="detail">{this.props.currentZone.zip}</span><br/>
                <span className="detail">{this.props.currentZone.numComments} comments</span>
            </div>
        );
    };
};

export default Zone;
