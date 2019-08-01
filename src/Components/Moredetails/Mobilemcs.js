import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import '../../Style/Moredetails/Lamp.css';
import Sidebar from "../Sidebar";
import Tobar from "../Mobile/Tobar";
import Mobilenav from "../Mobile/Mobilenav";


class Mobilemcs extends React.Component {

    render(){

        return (
            <div>
               <Tobar/>
               <Mobilenav/>
                <div className= "mobile-main-panel-two-trees">
                    <div className= "row">
                        <div className= "col-md-6">
                            <a href= "#" className="project-title-a"><h3 className="project-title">Microwave Communication System</h3></a>
                            <p className= "project-heading top-bottom">
                                This PHP application takes data associated with radio frequency and make some calculations using PHP
                                and shows that information in the form of a graph.
                            </p>
                            <p className= "project-descrip">Developed some complex PHP and MySQL scripts as:</p>
                            <ul className= "bullet-descrip">
                                <li>To check if the uploaded file is csv and has authentic data</li>
                                <li>Read the csv file line by line and keep storing in MySQL as it goes</li>
                                <li>If something goes wrong in any of the data rows then MySQL statements will rollback</li>
                                <li>jQuery and AJAX to handle requests</li>
                            </ul>


                            <ul>
                                <li className= "ghub"><a href= "http://nayangoswami.com/lamp2_part3/lamp2_part3/" className= "more-details-ts">
                                    <i className="external alternate icon"></i> Visit Site
                                </a></li>
                                <li className= "ghub"><a href= "https://github.com/NayanRGoswami/Lamp_project" className= "more-details-ts">
                                    <i className="github square icon"></i> Github
                                </a></li>
                            </ul>
                        </div>
                        <div className= "col-md-6">
                            <p className="technologies">TECHNOLOGIES USED</p>

                            <ul className = "technologies-ul">
                                <li className="technologies-li"><a className="technologies-a" href= "https://www.php.net/">PHP</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://jquery.com/">jQuery</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://www.w3schools.com/xml/ajax_intro.asp">AJAX</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://getbootstrap.com/">Bootstrap</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://www.mysql.com/">MySQL</a></li>
                            </ul>
                        </div>
                    </div>
                        <div className= "row">
                            <div className= "col-md-12 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/mcs.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>

                        <div className= "row">
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/mcs.2.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/mcs.3.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>
                    <div className= "row">
                        <div className= "col-md-12 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/mcs.4.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mobilemcs;
