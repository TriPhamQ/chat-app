import React, { Component } from 'react';
import Comment from './Comment';
import styles from './styles';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    body: 'Comment 1',
                    user: 'Tri',
                    timestamp: '10:30'
                },
                {
                    body: 'Comment 2',
                    user: 'Trang',
                    timestamp: '10:32'
                },
                {
                    body: 'Comment 3',
                    user: 'Thoa',
                    timestamp: '10:35'
                },
                {
                    body: 'Comment 4',
                    user: 'Long',
                    timestamp: '10:36'
                }
            ]
        };
    };

    render() {
        const commentStyle = styles.comment;
        const commentList = this.state.list.map((comment, index) => {
            return (
                <li><Comment currentComment={comment} /></li>
            );
        });

        return (
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={commentStyle.commentBox}>
                    <ul style={commentStyle.commentList}>
                        {commentList}
                    </ul>
                </div>
            </div>
        );
    };
};

export default Comments
