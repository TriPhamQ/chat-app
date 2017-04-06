import React, { Component } from 'react';
import { Comment, CreateComment } from '../presentation';
import styles from './styles';
import { APIManager } from '../../utils';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    };
    componentDidMount() {
        console.log('Component Did Mount');
        APIManager.get('/api/comment', null, (err, response) => {
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
    submitComment(comment) {
        let newComment = Object.assign({}, comment);
        APIManager.post('/api/comment', newComment, (err, response) => {
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

    render() {
        const commentStyle = styles.comment;
        const commentList = this.state.list.map((comment, index) => {
            return (
                <li key={index}><Comment currentComment={comment} /></li>
            );
        });

        return (
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={commentStyle.commentBox}>
                    <ul style={commentStyle.commentList}>
                        {commentList}
                    </ul>
                    <CreateComment onCreate={this.submitComment.bind(this)} />
                </div>
            </div>
        );
    };
};

export default Comments;
