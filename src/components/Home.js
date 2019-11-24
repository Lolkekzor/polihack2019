import React from 'react';
import { Image } from 'react-bootstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="w-100">
                {<Image style={{width: '1850px'}} src={require("../images/aff2.jpg")}/>}
            </div>
        )
    }

}

export default Home;
