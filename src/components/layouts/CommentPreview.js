import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class CommentPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            plusDisabled: false,
            minusDisabled: false,
            bestAnswer: false
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

    bestAns() {
        this.setState({
            bestAnswer: !this.state.bestAnswer
        })
    }

    render() {
        return (
            <Row style={{ width: '75%' }} className="centerish">
                <Col md="1">
                    <SubdirectoryArrowRightIcon style={{ width: '75px', height: '75px', margin: '10px 10px 10px 30px' }}/>
                </Col>
                <Col md="11">
                    <Card>
                        <Row className="w-100 noPadding">
                            <Col md="1" >
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
                            <Col md="10">
                                <Card.Body>
                                    <Card.Text>
                                        ce plm se antampla
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md="1">
                                {this.state.bestAnswer ? 
                                (<CheckCircleIcon onClick={() => {this.bestAns()}} style={{ width: '60px', height: '60px', margin: '20px 0px 0px 0px' }}/>) 
                                : 
                                (<CheckCircleOutlineIcon onClick={() => {this.bestAns()}} style={{ width: '60px', height: '60px', margin: '20px 0px 0px 0px' }}/>)}
                                
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        )
    }

}

export default CommentPreview;
