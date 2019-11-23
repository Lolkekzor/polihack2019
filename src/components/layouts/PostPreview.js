import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

class PostPreview extends React.Component {
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
            <Card style={{ width: '75%' }}>
                <Row className="w-100 noPadding">
                    <Col sm="1" >
                        <Row  className="d-flex justify-content-center">
                            <Button disabled={this.state.plusDisabled} onClick={() => {this.plus()}}>⬆</Button>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <h6>{this.state.count}</h6>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Button disabled={this.state.minusDisabled}  onClick={() => {this.minus()}}>⬇</Button>
                        </Row>
                    </Col>
                    <Col sm="11">
                        <Card.Body>
                            <Card.Title className="border-bottom">Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.ome quick example text to build on the card title and make up the bulk of
                                the card's content.ome quick example text to build on the card title and make up the bulk of
                                the card's content.ome quick example text to build on the card title and make up the bulk of
                                the card's content.ome quick example text to build on the card title and make up the bulk of
                                the card's content.ome quick example text to build on the card title and make up the bulk of
                                the card's content.ome quick example text to build on the card title and make up the bulk of
                                the card's content.ome quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

        )
    }

}

export default PostPreview;
