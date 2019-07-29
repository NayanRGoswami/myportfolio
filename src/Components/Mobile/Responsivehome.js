import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import $ from 'jquery';
import '../../Style/Mobile/Mobilehome.css';

import "../../Style/Home.css";
import Mobilenav from "./Mobilenav";
import {Link} from "react-router-dom";
import Tobar from "./Tobar";
import Introduction from "../Introduction";
import Mobileintroduction from "./Mobileintroduction";


class Responsivehome extends React.Component {

    componentDidMount = () => {

    }

    render(){


        return (
            <div className= "responsivehome">
                <Mobilenav/>
                <img className= "home-spec-bg" src= {require('../../Images/background.jpg')} alt="Landscape"/>
                <Mobileintroduction/>
            </div>
        );
    }
}

export default Responsivehome;

