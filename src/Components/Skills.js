import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import '../Style/Skills.css';
import Sidebar from "./Sidebar";
import Mobileskills from "./Mobile/Mobileskills";

class Skills extends React.Component {

    componentDidMount = () => {

    }


    render(){
        return (
            <div>
                <img className= "center-fit" src= {require('../Images/background.jpg')} alt="Landscape"/>
                <Sidebar/>
                <Mobileskills/>
                <div className= "main-panel-skills">
                    <div className = "skills-main">
                        <h2 className= "skills-title">SKILLS</h2>
                        <p className= "skills-section-text">A full-stack <strong>web developer</strong> who believes in <strong>learning</strong> and that is best of the skills I have.</p>
                        <p className= "skills-section-text">I have developed <Link to={"./portfolio"} className = "text-danger link-words">multiple projects</Link> in which I accomplished both <strong>front-end</strong> and <strong>back-end tasks.</strong></p>
                        <p className= "skills-section-text">Currently, I have <span className= "text-danger">React</span>, <span className= "text-danger">Redux</span>, <span className= "text-danger">Laravel</span> and other various tecnologies in my toolbox.
                        </p>
                        <p className= "skills-section-text">Frameworks stated above are the technologies which I use currently and I am open to learn any of the new
                        frameworks & technologies for a work opportunity, to grow my career as a web developer.</p>
                        <hr className= "line-devider"></hr>

                        <h2 className= "skills-title text-danger"><i className="laptop icon"></i> FRONT-END WEB DEVELOPMENT</h2>

                        <p className= "skills-section-text">
                            To design and decorate the sites in front-end I use <span className="text-danger">React</span> and I am also
                            learning <span className="text-danger">Angular</span> because that offers two way data-binding. Other then that
                            I use PhotoShop and Illustrator to back my projects to create some eye-catching content for web.
                        </p>

                        <p className= "skills-section-text"><strong>Detailed list of my skills</strong> in front-end development is as followed:</p>
                        <ul className="detail-skills-ul">
                            <li>Create web pages with all the components using <span className="text-danger">Bootstrap</span>,
                                <span className="text-danger">Semantic-ui</span> or custom <span className="text-danger">css</span></li>
                            <li>Design a website by referring a mock-up or so</li>
                            <li>Good eye for <span className="text-danger">UI</span> and some experience with <span className="text-danger">UX</span></li>
                            <li>Use <span className="text-danger">jQuery</span> for animation and <span className="text-danger">AJAX</span> requests</li>
                        </ul>

                        <ul>
                            <a href = "https://jquery.com/"><li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/jQuery.png")} alt = "jQuery Logo"/></li></a>
                            <a href = "https://reactjs.org/"><li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/react.png")} alt = "React Logo"/></li></a>
                            <a href = "https://getbootstrap.com/"> <li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/bootstrap.png")} alt = "BootStrap Logo"/></li></a>
                            <a href = "https://angularjs.org/"> <li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/angular.png")} alt = "Angular Logo"/></li></a>
                            <a href = "https://en.wikipedia.org/wiki/HTML">  <li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/html.png")} alt = "Css Logo"/></li></a>
                            <a href = "https://www.w3schools.com/css/"><li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/css.png")} alt = "Js Logo"/></li></a>
                        </ul>

                        <hr className= "line-devider"></hr>

                        <h2 className= "skills-title text-danger"><i className="code icon"></i> BACK-END WEB DEVELOPMENT</h2>

                        <p className= "skills-section-text">
                            While in the college I learned various technologies which includes <span className= "text-danger">PHP</span>,
                            <span className= "text-danger">Node.js</span> and <span className= "text-danger">C#</span>. I then moved forward with
                            PHP after doing at-least 2 projects in every framework.
                        </p>

                        <p className= "skills-section-text">
                           What I believe is that the process of learning has taugth me so well, so now what I focus on is the
                            end result and not the framework used, which is the reason why I am pretty much open to start working
                            with any technology, even if I don't know it yet, I will be happy to learn it.
                        </p>

                        <p className= "skills-section-text">My <strong>Skill-set</strong> in back-end development :</p>
                        <ul className="detail-skills-ul">
                            <li>Expertise with PHP in developing web applications</li>
                            <li>Write <span className= "text-danger">Larvel</span> like any MVC framework with a team or alone</li>
                            <li>Handle or manipulate data with various SQL databases as <span className= "text-danger">MySQL</span>,
                                <span className= "text-danger">Oracle</span> or  <span className= "text-danger">MariaDB</span></li>
                            <li>Take help from <span className= "text-danger">RESTful APIs</span> to make applications fast and robust</li>
                            <li>Excellent skills with <span className="text-danger">Object-oriented programming</span></li>
                            <li>Mainly worked with PHP but c# and Node.js are also in my stack</li>
                        </ul>

                        <ul>
                            <a className= "no-line" href = "https://laravel.com/"><li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/laravel.png")} alt = "Laravel Logo"/></li></a>
                            <a className= "no-line" href = "https://www.php.net/"><li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/php.png")} alt = "PHP Logo"/></li></a>
                            <a className= "no-line" href = "https://www.mysql.com/"> <li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/sql.png")} alt = "MySQL Logo"/></li></a>
                            <a className= "no-line" href = "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"> <li className= "tech-logos-li"><img className= "tech-logos" src={require("../Images/techs/c.png")} alt = "C# Logo"/></li></a>
                        </ul>

                        <hr className="line-devider"></hr>

                        <h2 className= "skills-title text-danger"><i className="suitcase icon"></i> SOME MORE SKILLS TO OFFER</h2>

                        <p className= "skills-section-text">
                            Other then my skills with <strong>front-end</strong> and <strong>back-end</strong> development,
                            I also lay attention on other small things that helps you make a <strong>successful</strong> web application.
                        </p>

                        <ul className="detail-skills-ul">
                            <li>Type clean code which makes it easy for others to read and understand</li>
                            <li>Experience with both <span className= "text-danger">Wordpress</span> and <span className= "text-danger">Drupal</span> CMS</li>
                            <li>Deployment of websites on different platforms like <span className= "text-danger">AWS</span>,
                            <span className= "text-danger"> Microsoft Azure</span> or any other shared hosting </li>
                            <li>Expertise with both <span className= "text-danger">Windows</span> and <span className= "text-danger">Linux</span> GUI as well as CLI</li>
                            <li>Experience of making applications with <span className="text-danger">LAMP</span> stack</li>
                        </ul>

                        <hr className = "line-devider"></hr>

                        <p className= "skills-section-text">
                           I am looking for an opportunity where I can contribute and grow as a web developer.
                            If you think I am a good fit in your company then feel free to
                             <Link to={"./contact"}><span className="text-danger"> contact </span></Link> me, I will be happy to talk.
                        </p>


                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
