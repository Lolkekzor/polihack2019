import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import profilePic from 'dan.png';

class UserProfile extends React.Component {
    render() {
        return (
            <Row>
                <Col md="4">
                    <div class="add-border">
                        <Row className="d-flex justify-content-center">
                            <img src={require("./img/brad.jpeg")} style={{width: 200, height: 200, borderRadius: 200/ 2, marginBottom: 20}}/>
                        </Row>
                        <Row className="d-flex justify-content-center"> <br/><h5><b>Student Generic</b></h5> <br/></Row>
                        <Row className="d-flex justify-content-center"><h7>351 puncte</h7> <br/></Row>
                        
                        <Row className="d-flex justify-content-center"><h6><b>Recompense disponibile</b></h6> <br/></Row>

                        <div class="reward-class">
                        <Row className="d-flex justify-content-center">
                            <Col md="3"><img src={require("./img/kfc.jpg")} style={{width: 50, height: 50}}/></Col>
                            <Col md="6"><p class="cent-vert"> 50% off crispy </p></Col>
                            <Col md="3"><b><p class="cent-vert"> 100p </p></b></Col>
                        </Row>
                        </div>

                        <div class="reward-class">
                        <Row className="d-flex justify-content-center">
                            <Col md="3"><img src={require("./img/phi18.jpg")} style={{width: 50, height: 50}}/></Col>
                            <Col md="6"><p class="cent-vert"> O intrare gratis </p></Col>
                            <Col md="3"><b><p class="cent-vert"> 150p </p></b></Col>
                        </Row>
                        </div>

                        <div class="reward-class">
                        <Row className="d-flex justify-content-center">
                            <Col md="3"><img src={require("./img/memo10.png")} style={{width: 50, height: 50}}/></Col>
                            <Col md="6"><p class="cent-vert"> Meniul zilei gratis </p></Col>
                            <Col md="3"><b><p class="cent-vert"> 220p </p></b></Col>
                        </Row>
                        </div>
                    </div>
                </Col>
                <Col md="8">
                    <div class="invisible-border">
                    <Row>
                        <Col>
                        <h4><b>Badges</b></h4>
                        <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Row className="d-flex justify-content-center"><img src={require("./img/java.png")} width="175"/></Row>
                            <Row className="d-flex justify-content-center">
                                <p class="reward-class">7 raspunsuri verificate <br/> in domeniul OOP</p>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="d-flex justify-content-center"><img src={require("./img/asdn.png")} width="175"/></Row>
                            <Row className="d-flex justify-content-center">
                                <p class="reward-class">5 raspunsuri verificate <br/> in domeniul ASDN</p>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="d-flex justify-content-center"><img src={require("./img/olarit.png")} width="175"/></Row>
                            <Row className="d-flex justify-content-center">
                            <p class="reward-class">6 vaze olarite all around <br/> cu indemanare</p>
                            </Row>
                        </Col>
                    </Row>
                    </div>
                </Col>

            </Row>
        )
    }
}

export default UserProfile;