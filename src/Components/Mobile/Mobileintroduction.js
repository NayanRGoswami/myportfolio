import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import Mobilehome from '../../Style/Mobile/Mobilehome.css';


class Mobileintroduction extends React.Component {

    componentDidMount = () => {

    }

    render(){

        return (
            <div className= "mobile-introduction">


                <div className = "buttons">
                    <Link to = "/portfolio" className = "portfolio-button main-buttons">PORTFOLIO</Link><br/><br/><br/>
                    <Link to = {"./skills"} className = "skills-button main-buttons">SKILLS</Link>
                </div>

                <div className= "mobile-words">
                    <h3>Hi, I am Nayan,</h3>
                    <h3>a web developer specialized</h3>
                    <h3>in full-stack web development</h3>
                </div>
            </div>
        );
    }
}

export default Mobileintroduction;
