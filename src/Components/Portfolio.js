import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import '../Style/Portfolio.css';
import Sidebar from "./Sidebar";
import Mobileportfolio from "./Mobile/Mobileportfolio";

class Portfolio extends React.Component {

    componentDidMount = () => {

    }

    render(){

        return (
            <div>
               <img className= "center-fit" src= {require('../Images/background.jpg')} alt="Landscape"/>
               <Sidebar />
               <Mobileportfolio/>
               <div className= "main-panel portfolio-main">
                    <h2 className= "portfolio-title">PORTFOLIO</h2>
                    <p className= "portfolio-intro">"There are three responses to a piece of work yes,
                         no and Wow ! Wow is the one to aim for" ~ Milton Glaser</p>
                    <p className= "portfolio-intro">Check Out My Work Below</p>
                    <div className = "projects-list">
                       <ul>

                           <li className= "project">
                               <div className = "row">
                                   <div className= "col-md-10 project-content">
                                       <p className= "project-descrip">Looking for a full-stack web developer to join your team ?</p>
                                       <p className= "project-descrip"><Link to= {"./contact"}><span className= "text-danger">Contact me.</span></Link> I will get back to you within ~ 24 hours.</p>
                                   </div>
                               </div>
                           </li>

                           <li className= "project">
                               <div className = "row">
                                   <div className= "col-md-2 project-date">
                                       <i>SEP 2019 - NOV 2019</i>
                                   </div>

                                   <div className= "col-md-6 project-content">
                                       <Link to= {"./twotrees"}  className="project-title-a"><h3 className="project-title">Game Artist's Website</h3></Link>
                                       <p className= "project-heading top-bottom">
                                          The portfolio website helps them to display their projects built in sketchfab, in their own
                                           website. This makes it easier for them to show all their work on a single website.
                                       </p>
                                       <p className= "project-descrip">The application is developed using React :</p>
                                       <ul className= "bullet-descrip">
                                           <li>React Components</li>
                                           <li>Sketchfab API</li>
                                       </ul>

                                       <Link to= {"./gameartist"} className= "more-details">
                                           More Details
                                       </Link>

                                       <p className="technologies">TECHNOLOGIES</p>

                                       <ul className = "technologies-ul">
                                           <li className="technologies-li"><a className="technologies-a" href= "https://jquery.com/">jQuery</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.w3schools.com/xml/ajax_intro.asp">AJAX</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://getbootstrap.com/">Bootstrap</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://reactjs.org/">React</a></li>
                                       </ul>
                                   </div>

                                   <div className= "col-md-4 project-image-section">
                                       <Link to ={"./gameartist"} >
                                           <img className= "project-image" alt = "twotrees-home page" src={require("../Images/Projects/game_artist.PNG")}/>
                                       </Link>
                                   </div>
                               </div>
                           </li>

                           <li className= "project">
                               <div className = "row">
                                   <div className= "col-md-2 project-date">
                                       <i>JUNE 2019 - JULY 2019</i>
                                   </div>

                                   <div className= "col-md-6 project-content">
                                       <Link to= {"./twotrees"}  className="project-title-a"><h3 className="project-title">Two Trees Olive Oil</h3></Link>
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

                                       <Link to= {"./twotrees"} className= "more-details">
                                           More Details
                                       </Link>

                                       <p className="technologies">TECHNOLOGIES</p>

                                       <ul className = "technologies-ul">
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.drupal.org/">Drupal</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.mysql.com/">MySQL</a></li>
                                       </ul>
                                   </div>

                                   <div className= "col-md-4 project-image-section">
                                       <Link to ={"./twotrees"} >
                                           <img className= "project-image" alt = "twotrees-home page" src={require("../Images/Projects/twoolive.PNG")}/>
                                       </Link>
                                   </div>
                               </div>
                           </li>


                           <li className= "project">
                               <div className = "row">
                                   <div className= "col-md-2 project-date">
                                       <i>APRIL 2019 - JUNE 2019</i>
                                   </div>

                                   <div className= "col-md-6 project-content">
                                       <Link to= {"./eshoppers"} className="project-title-a"><h3 className="project-title">Eshoppers</h3></Link>
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

                                       <Link to= {"./eshoppers"} className= "more-details">
                                           More Details
                                       </Link>

                                       <p className="technologies">TECHNOLOGIES</p>

                                       <ul className = "technologies-ul">
                                           <li className="technologies-li"><a className="technologies-a" href= "https://laravel.com/">Laravel</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.mysql.com/">MySQL</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://jquery.com/">jQuery</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.php.net/">PHP</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://getbootstrap.com/">BootStrap</a></li>
                                       </ul>
                                   </div>

                                   <div className= "col-md-4 project-image-section">
                                       <Link to = {"./eshoppers"}>
                                           <img className= "project-image" alt = "Eshoppers-home page" src={require("../Images/Projects/eshoppers.PNG")}/>
                                       </Link>
                                   </div>
                               </div>
                           </li>

                           <li className= "project">
                               <div className = "row">
                                   <div className= "col-md-2 project-date">
                                       <i>JAN 2019 - MARCH 2019</i>
                                   </div>

                                   <div className= "col-md-6 project-content">
                                       <Link to= {"./mws"} className="project-title-a"><h3 className="project-title">Microwave Communication System</h3></Link>
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

                                       <Link to= {"./mws"} className= "more-details">
                                           More Details
                                       </Link>

                                       <p className="technologies">TECHNOLOGIES</p>

                                       <ul className = "technologies-ul">
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.php.net/">PHP</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://jquery.com/">jQuery</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.w3schools.com/xml/ajax_intro.asp">AJAX</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://getbootstrap.com/">Bootstrap</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.mysql.com/">MySQL</a></li>
                                       </ul>
                                   </div>

                                   <div className= "col-md-4 project-image-section">
                                       <Link to = {"./mws"}>
                                           <img className= "project-image" alt = "MCS-home page" src={require("../Images/Projects/mcs.PNG")}/>
                                       </Link>
                                   </div>
                               </div>
                           </li>

                           <li className= "project">
                               <div className = "row">
                                   <div className= "col-md-2 project-date">
                                       <i>JAN 2019 - APRIL 2019</i>
                                   </div>

                                   <div className= "col-md-6 project-content">
                                       <Link to= {"./londoners"} className="project-title-a"><h3 className="project-title">Londoners - Discussion Forum</h3></Link>
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

                                       <Link to= {"./londoners"} className= "more-details">
                                           More Details
                                       </Link>

                                       <p className="technologies">TECHNOLOGIES</p>

                                       <ul className = "technologies-ul">
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.php.net/">PHP</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://jquery.com/">jQuery</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.w3schools.com/xml/ajax_intro.asp">AJAX</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://getbootstrap.com/">Bootstrap</a></li>
                                           <li className="technologies-li"><a className="technologies-a" href= "https://www.mysql.com/">MySQL</a></li>
                                       </ul>
                                   </div>

                                   <div className= "col-md-4 project-image-section">
                                       <Link to = {"./londoners"}>
                                           <img className= "project-image" alt = "Londoners-home page" src={require("../Images/Projects/forum.PNG")}/>
                                       </Link>
                                   </div>
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
        );
    }
}

export default Portfolio;
