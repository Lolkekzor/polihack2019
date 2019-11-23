import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

class CommentPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            plusDisabled: false,
            minusDisabled: false
        }
    }

    plus() {
        this.setState({
            count: this.state.count + 1,
            plusDisabled: true
        })
    }

    minus() {
        this.setState({
            count: this.state.count - 1,
            minusDisabled: true
        })
    }

    render() {
        return (
            <Row style={{ width: '75%' }} className="centerish">
                <Col sm="1">
                    <br/>
                    sageata dreapta jos
                </Col>
                <Col sm="11">
                    <Card>
                        <Row className="w-100 noPadding">
                            <Col sm="1" >
                                <Row className="d-flex justify-content-center">
                                    <Button disabled={this.state.plusDisabled} onClick={() => { this.plus() }}>⬆</Button>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <h6>{this.state.count}</h6>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Button disabled={this.state.minusDisabled} onClick={() => { this.minus() }}>⬇</Button>
                                </Row>
                            </Col>
                            <Col sm="10">
                                <Card.Body>
                                    <Card.Title className="border-bottom">Comment Title</Card.Title>
                                    <Card.Text>
                                        ce plm se antampla
                        </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        )
    }

}

export default CommentPreview;
