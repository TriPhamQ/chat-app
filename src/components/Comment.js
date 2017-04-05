import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.currentComment.user}<span> | </span>{this.props.currentComment.timestamp}:
                <p>{this.props.currentComment.body}</p>
                <hr />
            </div>
        );
    };
};

export default Comment;
