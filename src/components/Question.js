import React from "react";
import CommentPreview from "./layouts/CommentPreview";
import PostPreview from "./layouts/PostPreview";

import questions from "./../questions.json";

class Question extends React.Component {
    constructor(props) {
        super(props);
        let data = questions[props.match.params.id];
        this.state = {
            post: data
        }
    }

    render() {
        return (
            <div>
                <PostPreview user={this.state.post.user} title={this.state.post.title} content={this.state.post.desc} upvotes={this.state.post.upvotes} />
                <div>
                    {this.state.post.comments.map((comment, idx) => (
                        <CommentPreview user={comment.user} id={idx} text={comment.text} upvotes={comment.upvotes}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Question;