import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import '../../Style/Moredetails/Twotrees.css';
import Sidebar from "../Sidebar";
import Tobar from "../Mobile/Tobar";
import Mobilenav from "../Mobile/Mobilenav";


class Mobiletwotrees extends React.Component {

    render(){

        return (
            <div>
                <Tobar/>
                <Mobilenav/>
                <div className= "mobile-main-panel-two-trees">
                    <div className= "row">
                        <div className= "col-md-6">
                            <h2 className= "more-details-title">Two Trees Olive Oil</h2>
                            <p className= "project-heading top-bottom">
                                Two trees provides information to users or customers about the products and also allow them to
                                give suggestions or comment on the articles.
                            </p>
                            <p className= "project-descrip">The application is developed using Drupal with:</p>
                            <ul className= "bullet-descrip">
                                <li>Drupal modules</li>
                                <li>CMS concepts</li>
                                <li>MySQL database integration with drupal site</li>
                                <li>All the information related to the users and articles is stored in MySQL database.</li>
                            </ul>
                            <p className= "project-descrip">
                                Two Trees Olive Oil is a demo website developed in a short period using Drupal to learn and
                                explore about the functionalities of drupal. It provides all the information which a user might need
                                before buying the product and it also allows admin to add different articles.
                            </p><br/>
                            <p className= "project-descrip">
                                Adding to that user can have their own profile if they want to give suggestions about the product
                                to help other users.
                            </p><br/><br/>

                            <a href= "http://nayangoswami.com/drupal-8.7.2/" className= "more-details-ts">
                                <i className="external alternate icon"></i> Visit Site
                            </a>

                        </div>
                        <div className= "col-md-6">
                            <p className="technologies">TECHNOLOGIES USED</p>

                            <ul className = "technologies-ul">
                                <li className="technologies-li"><a className="technologies-a" href= "#">Drupal</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "#">MySQL</a></li>
                            </ul>
                        </div>
                    </div>
                        <div className= "row">
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/twoolive.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>

                        <div className= "row">
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/twoolive.2.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/twoolive.3.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>

                    <div className= "row">
                        <div className= "col-md-6 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/twoolive.4.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mobiletwotrees;
