import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class CommentPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.upvotes,
            upvoted: false,
            downvoted: false,
            bestAnswer: false
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

            this.changeColor("#upvote" + this.props.id, "#downvote" + this.props.id, 1);
        }
        else {
            this.setState({
                count: this.state.count - 1,
                upvoted: !this.state.upvoted
            })
            this.changeColor("#upvote" + this.props.id, "#downvote" + this.props.id, 0);
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
            this.changeColor("#downvote" + this.props.id, "#upvote" + this.props.id, 1);
        }
        else {
            this.setState({
                count: this.state.count + 1,
                downvoted: !this.state.downvoted
            })
            this.changeColor("#downvote" + this.props.id, "#upvote" + this.props.id, 0);
        }
    }

    bestAns() {
        this.setState({
            bestAnswer: !this.state.bestAnswer
        })
    }

    render() {
        return (
            <Row style={{ width: '75%' }} className="centerish">
                <Col md="1">
                    <SubdirectoryArrowRightIcon style={{ width: '75px', height: '75px', margin: '10px 10px 10px 30px' }} />
                </Col>
                <Col md="11">
                    <Card>
                        <Row className="w-100 noPadding">
                            <Col md="1" >
                                <Row className="d-flex justify-content-center">
                                    <Button id={"#upvote" + this.props.id} onClick={() => { this.plus() }}>⬆</Button>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <h6>{this.state.count}</h6>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Button id={"#downvote" + this.props.id} disabled={this.state.minusDisabled} onClick={() => { this.minus() }}>⬇</Button>
                                </Row>
                            </Col>
                            <Col md="10">
                                <Card.Body>
                                    <Card.Text className="text-left">
                                        {this.props.text}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md="1">
                                {this.state.bestAnswer ?
                                    (<CheckCircleIcon onClick={() => { this.bestAns() }} style={{ width: '60px', height: '60px', margin: '20px 0px 0px 0px' }} />)
                                    :
                                    (<CheckCircleOutlineIcon onClick={() => { this.bestAns() }} style={{ width: '60px', height: '60px', margin: '20px 0px 0px 0px' }} />)}

                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        )
    }

}

export default CommentPreview;
