import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

class PostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.upvotes,
            upvoted: false,
            downvoted: false
        }
    }

    changeColor(first, second, uf) {
        if (uf) {
            document.getElementById(first).setAttribute("style", "background-color: red;");
            document.getElementById(second).setAttribute("style", "background-color: #007bff;");
        } else {
            document.getElementById(first).setAttribute("style", "background-color: #007bff;");
        }
    }

    plus() {
        if (!this.state.upvoted) {
            if (this.state.downvoted)
                this.setState({
                    count: this.state.count + 2,
                    upvoted: !this.state.upvoted,
                    downvoted: !this.state.downvoted
                })
            else
                this.setState({
                    count: this.state.count + 1,
                    upvoted: !this.state.upvoted
                })

            this.changeColor("#upvote", "#downvote", 1);
        }
        else {
            this.setState({
                count: this.state.count - 1,
                upvoted: !this.state.upvoted
            })
            this.changeColor("#upvote", "#downvote", 0);
        }
    }

    minus() {
        if (!this.state.downvoted) {
            if (this.state.upvoted)
                this.setState({
                    count: this.state.count - 2,
                    upvoted: !this.state.upvoted,
                    downvoted: !this.state.downvoted
                })
            else
                this.setState({
                    count: this.state.count - 1,
                    downvoted: !this.state.downvoted
                })
            this.changeColor("#downvote", "#upvote", 1);
        }
        else {
            this.setState({
                count: this.state.count + 1,
                downvoted: !this.state.downvoted
            })
            this.changeColor("#downvote", "#upvote", 0);
        }
    }

    render() {
        return (
            <Card style={{ width: '75%' }}>
                <Row className="w-100 noPadding">
                    <Col sm="1" >
                        <Row className="d-flex justify-content-center">
                            <Button id="#upvote" style={{backgroundColor: this.state.upColor}} onClick={() => { this.plus() }}>⬆</Button>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <h6>{this.state.count}</h6>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Button id="#downvote" style={{backgroundColor: this.state.upColor}} onClick={() => { this.minus() }}>⬇</Button>
                        </Row>
                    </Col>
                    <Col sm="11">
                        <Card.Body>
                            <Card.Title className="border-bottom">{this.props.title}</Card.Title>
                            <Card.Text className="text-left">{this.props.content}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

        )
    }

}

export default PostPreview;
