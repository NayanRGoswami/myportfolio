import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import $ from 'jquery';

import '../../Style/Mobile/Mobileresume.css';
import Mobilenav from "./Mobilenav";
import {Link} from "react-router-dom";


class Mobileresume extends React.Component {

    componentDidMount = () => {

    }

    render(){


        return (
            <div>
                <div className= "mobileresume">
                    <div className= "resume-body">
                        <div className= "row">
                            <div className= "col-md-3">
                                <img src={require('../../Images/NayanG.jpg')} alt="My Image" className="resume-image"/>
                            </div>

                            <div className= "col-md-6">
                                <h2 className= "resume-name">NAYAN GOSWAMI</h2>
                                <h3 className= "resume-title">Full-Stack Web Developer</h3>
                                <p className= "resume-objective">
                                    A self-motivated IT professional with wide knowledge in
                                    JavaScript, HTML, CSS, MySQL, PHP and responsive web-development
                                </p>
                            </div>

                            <div className= "resume-address-bar col-md-3">
                                <a className= "resume-address-text" href = "mailto:nayangoswami008@gmail.com">nayangoswami008@gmail.com</a>
                                <p>226-224-4712</p>
                                <a className= "resume-address-text" href = "http://www.nayangosami.org">www.nayangoswami.org</a>
                            </div>
                        </div>

                        <div className = "resume-content">
                            <div className= "resume-section">
                                <ul>
                                    <li className= "resume-section-semi">
                                        <div className= "row">
                                            <div className= "col-md-3">
                                            </div>

                                            <div className= "col-md-9 main-red-title">
                                                <h3 className= "resume-education-title">EDUCATION</h3>
                                            </div>
                                        </div>

                                        <div className= "row">
                                            <div className= "col-md-3">
                                                <p className= "resume-date">
                                                    <i>JAN 2018 - MAY 2019</i>
                                                </p>
                                            </div>

                                            <div className= "col-md-9">
                                                <h5 className= "resume-section-title">Internet Applications and Web Development - Diploma</h5>
                                                <h6 className="resume-section-title">Fanshawe College, London, Ontario</h6>
                                                <p className= "list-heading"><strong>Program outline :</strong></p>
                                                <ul className= "resume-list-ul">
                                                    <li>Networking Fundamentals</li>
                                                    <li>Web Server Fundamentals</li>
                                                    <li>Web Design & Graphics</li>
                                                    <li>ASP.NET Programming</li>
                                                    <li>Relational Databases & SQL</li>
                                                    <li>OOP for Web Development</li>
                                                    <li>Mobile Web Development & Web Standards</li>
                                                    <li>Applied JavaScript tools & Frameworks</li>
                                                    <li>LAMP Programming</li>
                                                    <li>Web Programming with XML</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li className= "resume-section-semi">
                                        <div className= "row">
                                            <div className= "col-md-3">
                                                <p className= "resume-date">
                                                    <i>JULY 2015 - MARCH 2017</i>
                                                </p>
                                            </div>

                                            <div className= "col-md-9">
                                                <h5 className= "resume-section-title">High School Diploma</h5>
                                                <h6 className="resume-section-title">Anand Niketan School, Mehsana, Gujarat, India</h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className= "resume-section">
                                <ul>
                                    <li className= "resume-section-semi">
                                        <div className= "row">
                                            <div className= "col-md-3">
                                            </div>

                                            <div className= "col-md-9 main-red-title">
                                                <h3 className= "resume-education-title">STRENGTHS & SKILLS</h3>
                                            </div>
                                        </div>

                                        <div className= "row">
                                            <div className= "col-md-3">
                                                <p className= "resume-date">

                                                </p>
                                            </div>

                                            <div className= "col-md-9">
                                                <ul className= "resume-list-ul">
                                                    <li>Outstanding work ethics and punctuality</li>
                                                    <li>High disciplined in accordance to rules and regulations</li>
                                                    <li>Applies standard web development standards effectively on web applications</li>
                                                    <li>Very precise and detail oriented during performances</li>
                                                    <li>Advance knowledge of PHP, HTML, CSS, JavaScript, jQuery, MySQL,
                                                        MVC Framework Laravel, front-end JavaScript library React, XML, OS Linux and Bootstrap
                                                    </li>
                                                    <li>Expertise in GIT version control</li>
                                                    <li>Develop websites with CMS WordPress and Drupal</li>
                                                    <li>Communicates effective as a team player</li>
                                                    <li>Strive to learn new about technologies and skills in the rapidly growing industry of IT</li>
                                                    <li>Creating and keeping deadlines</li>
                                                    <li>Strategic thinking</li>
                                                    <li>Recreate website layouts from the provided mock-ups</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className= "resume-section">
                                <ul>
                                    <li className= "resume-section-semi">
                                        <div className= "row">
                                            <div className= "col-md-3">
                                            </div>

                                            <div className= "col-md-9 main-red-title">
                                                <h3 className= "resume-education-title">EXPERIENCE</h3>
                                            </div>
                                        </div>

                                        <div className= "row">
                                            <div className= "col-md-3">
                                                <p className= "resume-date">
                                                    <i>JUNE 2019 - JULY 2019</i>
                                                </p>


                                            </div>

                                            <div className= "col-md-9">
                                                <h5 className="resume-section-title">Two Trees – Olive Oil (Drupal site)</h5>
                                                <ul className= "resume-list-ul">
                                                    <li>Used Drupal to make a dynamic website with blog functionalities</li>
                                                    <li>Integrated MySQL with Drupal to store user, products and articles related data</li>
                                                    <li>Users can comment on the articles after registering an account</li>
                                                    <li>After a user sends registration request admin will decide weather to allow the account </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className= "resume-section">
                                <ul>
                                    <li className= "resume-section-semi">
                                        <div className= "row">
                                            <div className= "col-md-3">
                                            </div>

                                            <div className= "col-md-9">

                                            </div>
                                        </div>

                                        <div className= "row">
                                            <div className= "col-md-3">
                                                <p className= "resume-date">
                                                    <i>APRIL 2019 - JUNE 2019</i>
                                                </p>


                                            </div>

                                            <div className= "col-md-9">
                                                <h5 className="resume-section-title">Laravel – Ecommerce Site (<a href= "http://www.nayangoswami.com"><span className= "text-danger">www.nayangoswami.com</span></a>)</h5>
                                                <ul className= "resume-list-ul">
                                                    <li>MVC Development Pattern</li>
                                                    <li>Database Migrations </li>
                                                    <li>Middleware and user authentication</li>
                                                    <li>Debugging</li>
                                                    <li>Blade templating system</li>
                                                    <li>Object oriented PHP</li>
                                                    <li>Eloquent</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className= "resume-section">
                                <ul>
                                    <li className= "resume-section-semi">
                                        <div className= "row">
                                            <div className= "col-md-3">
                                            </div>

                                            <div className= "col-md-9">

                                            </div>
                                        </div>

                                        <div className= "row">
                                            <div className= "col-md-3">
                                                <p className= "resume-date">
                                                    <i>JAN 2019 - MARCH 2019</i>
                                                </p>

                                            </div>

                                            <div className= "col-md-9">
                                                <h5 className="resume-section-title">Microwave Communication System</h5>
                                                <ul className= "resume-list-ul">
                                                    <li>Worked with team of five in agile environment</li>
                                                    <li>Requirements were based on a system-based calculations and data handling</li>
                                                    <li>Developed complex MySQL and PHP scripts according to requirements</li>
                                                    <li>Debugging and Integration with other developer's code</li>
                                                </ul>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className= "resume-section">
                                <ul>
                                    <li className= "resume-section-semi">
                                        <div className= "row">
                                            <div className= "col-md-3">
                                            </div>

                                            <div className= "col-md-9">

                                            </div>
                                        </div>

                                        <div className= "row">
                                            <div className= "col-md-3">
                                                <p className= "resume-date">
                                                    <i>JAN 2019 - APRIL 2019</i>
                                                </p>
                                            </div>

                                            <div className= "col-md-9">
                                                <h5 className="resume-section-title">Discussion Forum</h5>
                                                <ul className= "resume-list-ul">
                                                    <li>Developed all the basic functionalities of a discussion forum</li>
                                                    <li>User can register login and read or comment on the threads</li>
                                                    <li>Admin panel which allows user to add delete or update contents</li>
                                                    <li>Notifications for users if someone comments on their thread</li>
                                                    <li>All the functionalities were developed using PHP, HTML, CSS, MySQL and JavaScript</li>
                                                </ul>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className= "resume-section">
                            <ul>
                                <li className= "resume-section-semi">
                                    <div className= "row">
                                        <div className= "col-md-3">
                                        </div>

                                        <div className= "col-md-9">

                                        </div>
                                    </div>

                                    <div className= "row">
                                        <div className= "col-md-3">
                                            <p className= "resume-date">
                                                <i>JUNE 2018 - AUGUST 2018</i>
                                            </p>


                                        </div>

                                        <div className= "col-md-9">
                                            <h5 className="resume-section-title">Cordova Mobile Application (Trip Tracking App)</h5>
                                            <ul className= "resume-list-ul">
                                                <li>Mobile app to store information about visited or to be visited places</li>
                                                <li>Developed using Cordova framework and Firebase NoSQL database</li>
                                                <li>The app finds out how far is the selected location from the initial location</li>
                                                <li>The registered user can login and user their accounts to write something about the location</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className= "resume-section">
                            <ul>
                                <li className= "resume-section-semi">
                                    <div className= "row">
                                        <div className= "col-md-3">
                                        </div>

                                        <div className= "col-md-9 main-red-title">
                                            <h3 className= "resume-education-title">INTERESTS</h3>
                                        </div>
                                    </div>

                                    <div className= "row">
                                        <div className= "col-md-3">
                                            <p className= "resume-date">

                                            </p>

                                        </div>

                                        <div className= "col-md-9">
                                            <ul className= "resume-list-ul">
                                                <li><i className="volleyball ball icon"></i>Soccer</li>
                                                <li><i className="sticker mule icon"></i>Horseback riding</li>
                                                <li><i className="bars icon"></i>Workout</li>
                                            </ul>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    </div>
            </div>

        );
    }
}

export default Mobileresume;
