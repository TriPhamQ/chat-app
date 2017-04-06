import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import styles from './styles';
import superagent from 'superagent';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            comment: {
                user: '',
                body: ''
            }
        };
    };
    componentDidMount() {
        console.log('Component Did Mount');
        superagent
        .get('/api/comment')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) {
                alert('ERROR: ' + err)
            }
            else {
                console.log(response.body.results);
                let results = response.body.results;
                this.setState({
                    list: results
                })
            }
        })
    };
    submitComment() {
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.comment);
        this.setState({
            list: updatedList
        });
    };
    updateUser(event) {
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['user'] = event.target.value;
        this.setState({
            comment: updatedComment
        });
    };
    updateBody(event) {
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['body'] = event.target.value;
        this.setState({
            comment: updatedComment
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
                    <input onChange={this.updateUser.bind(this)} className="form-control" type="text" placeholder="User Name"></input><br />
                    <textarea onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"></textarea><br />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        );
    };
};

export default Comments
