import React from "react";
import CommentPreview from "./layouts/CommentPreview";
import PostPreview from "./layouts/PostPreview";
import { Form, Button } from "react-bootstrap";
import questions from "./../questions.json";

class Question extends React.Component {
    constructor(props) {
        super(props);
        let data = questions[props.match.params.id];
        this.state = {
            post: data,
            newComment: ''
        }
    }

    handleContent(evt) {
        let content = evt.target.value;
        this.setState({
            newComment: content
        });
    }

    addToComments() {
        if (this.state.newComment !== "") {
            let uf = {
                text: this.state.newComment,
                user: 'tudi21112',
                upvotes: 0
            }
            let newComments = this.state.post.comments.concat(uf);
            let newPost = {
                title: this.state.post.title,
                desc: this.state.post.desc,
                upvotes: this.state.post.upvotes,
                user: this.state.post.user,
                comments: newComments
            }
            this.setState({
                post: newPost,
                newComment: ''
            })
        }
    }

    render() {
        return (
            <div className="">
                <PostPreview user={this.state.post.user} title={this.state.post.title} content={this.state.post.desc} upvotes={this.state.post.upvotes} />
                <div>
                    {this.state.post.comments.map((comment, idx) => (
                        <CommentPreview user={comment.user} id={idx} text={comment.text} upvotes={comment.upvotes} />
                    ))}
                </div>
                <Form className="border-top" style={{ width: '75%' }} >
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label >Add comment</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={evt => { this.handleContent(evt) }} value={this.state.newComment} />
                    </Form.Group>
                    <Form.Group >
                        <Button style={{ margin: '0px 0px 80px 0px' }} onClick={() => { this.addToComments() }} variant="primary">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Question;