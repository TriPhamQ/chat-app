import React, { Component } from 'react';

class CreateComment extends Component {
    constructor() {
        super();
        this.state = {
            comment: {
                user: '',
                body: ''
            }
        };
    };
    updateComment(event) {
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment[event.target.id] = event.target.value;
        this.setState({
            comment: updatedComment
        });
    };
    submitComment(event) {
        console.log(this.state.comment);
        this.props.onCreate(this.state.comment);
    };
    render() {
        return (
            <div>
                <input id="user" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="User Name"></input><br />
                <textarea id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment"></textarea><br />
                <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
            </div>
        );
    };
};

export default CreateComment;
