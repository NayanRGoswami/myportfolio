import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import '../../Style/Moredetails/Londoners.css';
import Sidebar from "../Sidebar";
import Mobilelondoners from "./Mobilelondoners";


class Londoners extends React.Component {

    render(){

        return (
            <div>
                <img className= "center-fit" src= {require('../../Images/background.jpg')} alt="Landscape"/>
                <Sidebar/>
            <Mobilelondoners/>
                <div className= "main-panel-two-trees">
                    <div className= "row">
                        <div className= "col-md-6">
                            <a href= "#" className="project-title-a"><h3 className="project-title">Londoners - Discussion Forum</h3></a>
                            <p className= "project-heading top-bottom">
                                Discussion forum with all the basic functionalities where users can register
                                and comment about the topic or threads on the different categories available.
                            </p>
                            <p className= "project-descrip">Designed layout & developed all the back-end functionalities from scratch as:</p>
                            <ul className= "bullet-descrip">
                                <li>Worked in a team of five in agile environment</li>
                                <li>Wrote many complex MySQL queries and function as per different criteria</li>
                                <li>Did code integration and debugging tasks.</li>
                                <li>Completed the project within the deadline given.</li>
                            </ul>


                            <ul>
                                <li className= "ghub"><a href= "http://nayangoswami.com/Londoners" className= "more-details-ts">
                                    <i className="external alternate icon"></i> Visit Site
                                </a></li>
                                <li className= "ghub"><a href= "https://github.com/NayanRGoswami/Londoners" className= "more-details-ts">
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
                                <img className= "main-image-img" src = {require("../../Images/Projects/forum.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>

                        <div className= "row">
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/forum.2.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                            <div className= "col-md-6 main-image">
                                <img className= "main-image-img" src = {require("../../Images/Projects/forum.3.PNG")} alt = "Two Trees Home Page"/>
                            </div>
                        </div>
                    <div className= "row">
                        <div className= "col-md-12 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/forum.4.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Londoners;
