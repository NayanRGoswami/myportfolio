import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../../Style/Mobile/Mobilenav.css';


class Tobar extends React.Component {

    componentDidMount = () => {

    }

    render(){


        return (
            <div className= "Mobiletop">
                <div className= "my-avatar">
                    <a href="home"><img src={require('../../Images/NayanG.png')} alt="My Image" className="my-image"/></a>
                    <a className= "no-line" href = "home"><h3 className= "name-mobile">NAYAN GOSWAMI</h3></a>
                    <a className= "no-line" href = "home"><h6 className= "developer-title-mobile">FULL-STACK WEB DEVELOPER</h6></a>
                </div>
            </div>
        );
    }
}

export default Tobar;
