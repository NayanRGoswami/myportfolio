import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import '../../Style/Moredetails/Twotrees.css';
import Sidebar from "../Sidebar";
import Mobiletwotrees from "./Mobiletwotrees";


class Gameartist extends React.Component {

    render(){

        return (
            <div>
                <img className= "center-fit" src= {require('../../Images/background.jpg')} alt="Landscape"/>
                <Sidebar/>
                <Mobiletwotrees/>
                <div className= "main-panel-two-trees">
                    <div className= "row">
                        <div className= "col-md-6">
                            <h2 className= "more-details-title">Game Artist Portfolio template</h2>
                            <p className= "project-heading top-bottom">
                                This template would help a game designer to make his work easily available to clients or employers
                                over the web.
                            </p>
                            <p className= "project-descrip">The application is developed using React framework:</p>
                            <ul className= "bullet-descrip">
                                <li>React Components</li>
                                <li>Sketchfab API</li>
                                <li>jQuery and Bootstrap</li>
                            </ul>
                           <br/><br/>

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
                                <li className="technologies-li"><a className="technologies-a" href= "https://reactjs.org/">React</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://jquery.com/">jQuery</a></li>
                                <li className="technologies-li"><a className="technologies-a" href= "https://getbootstrap.com/">BootStrap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className= "row">
                        <div className= "col-md-12 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/game_artist2.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                    </div>

                    <div className= "row">
                        <div className= "col-md-6 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/game_artist3.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                        <div className= "col-md-6 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/game_artist4.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                    </div>
                    <div className= "row">
                        <div className= "col-md-12 main-image">
                            <img className= "main-image-img" src = {require("../../Images/Projects/game_artist.PNG")} alt = "Two Trees Home Page"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gameartist;
