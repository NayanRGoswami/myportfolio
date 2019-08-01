import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import '../../Style/Moredetails/Eshoppers.css';
import Sidebar from "../Sidebar";
import Tobar from "../Mobile/Tobar";
import Mobilenav from "../Mobile/Mobilenav";


class Mobileeshoppers extends React.Component {

    render(){

        return (
            <div>
                <Tobar/>
                <Mobilenav/>
                <div className= "mobile-main-panel-two-trees">
                    <div className= "row">
                        <div className= "col-md-6">
                            <h2 className= "more-details-title">Eshoppers</h2>
                            <p className= "project-descrip">Shopping made more easy</p>
                            <p className= "project-heading top-bottom">Eshoppers is a ecommerce website which allows you to register for an account and
                                do some online shopping.
                            </p>
                            <p className= "project-descrip">The application is developed using laravel functionalities as :</p>
                            <ul className= "bullet-descrip">
                                <li>Middleware - authentication</li>
                                <li>Laravel Routes</li>
                                <li>Eloquent</li>
                                <li>MySQL database</li>
                                <li>Blade templating system for laravel</li>
                            </ul>

                            <ul>
                                <li className= "ghub"><a href= "http://nayangoswami.com" className= "more-details-ts">
                                    <i className="external alternate icon"></i> Visit Site
                                </a></li>
                                <li className= "ghub"><a href= "https://github.com/NayanRGoswami/eshopper" className= "more-details-ts">
                                    <i className="github square icon"></i> Github
                                </a></li>
                            </ul>
                        </div>
                        <div className= "col-md-6">
                            <p className="technologies">TECHNOLOGIES USED</p>

                            <ul className = "technologies-ul">
                                <li className="technologies-li"><a className="technologies-a" href= "https://laravel.com/">Laravel</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://www.mysql.com/">MySQL</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://jquery.com/">jQuery</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://www.php.net/">PHP</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://getbootstrap.com/">BootStrap</a></li>
                            </ul>
                        </div>
                    </div>
                        <div className= "row">
                            <div className= "col-md-12 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/eshoppers.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>

                        <div className= "row">
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/eshoppers.2.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/eshoppers.3.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>
                    <div className= "row">
                        <div className= "col-md-12 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/eshoppers.4.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mobileeshoppers;
