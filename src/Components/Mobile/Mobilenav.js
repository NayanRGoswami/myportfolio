import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import '../../Style/Mobile/Mobilenav.css';


class Mobilenav extends React.Component {

    componentDidMount = () => {

    }

    render(){


        return (
            <div className= "Mobilenavigation">
                <nav className="navbar navbar-expand-lg navbar-dark main-mobile-nav">
                    <button className="navbar-toggler main-toggle-icon" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse inner-nav-div" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link mobile-nav-a border-home" to = "./home">HOME</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link mobile-nav-a" to = "./portfolio">PORTFOLIO</Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link mobile-nav-a" to = "./skills">SKILLS</Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link mobile-nav-a"to = "./contact">CONTACT ME</Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link mobile-nav-a" to = "./resume">RESUME</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Mobilenav;
