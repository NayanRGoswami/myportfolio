import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Sidebar.css';
import '../Style/Mobile/Mobilenav.css';

class Sidebar extends React.Component {

    componentDidMount = () => {

        $(document).ready(function(){

            $('.nav-a1').hover(function () {
                 $('.arrow-see1').addClass('angle right icon');
             })

             $('.nav-a1').mouseout(function () {
                 $('.arrow-see1').removeClass('angle right icon');
             })

             $('.nav-a2').hover(function () {
                 $('.arrow-see2').addClass('angle right icon');
             })

             $('.nav-a2').mouseout(function () {
                 $('.arrow-see2').removeClass('angle right icon');
             })

             $('.nav-a3').hover(function () {
                 $('.arrow-see3').addClass('angle right icon');
             })

             $('.nav-a3').mouseout(function () {
                 $('.arrow-see3').removeClass('angle right icon');
             })

             $('.nav-a4').hover(function () {
                 $('.arrow-see4').addClass('angle right icon');
             })

             $('.nav-a4').mouseout(function () {
                 $('.arrow-see4').removeClass('angle right icon');
             })

            });
    }


    render(){
        return (
                <div className= "sidebar">
                    <div className= "sidebar-inner">
                        <a href = "home"><img src = {require('../Images/NayanG.jpg')} alt = "My Image" className = "my-image"/></a>
                        <a className= "no-line" href = "home"><h2 className= "name">NAYAN GOSWAMI</h2></a>
                        <a className= "no-line" href = "home"><h4 className= "developer-title">FULL-STACK WEB DEVELOPER</h4></a>

                        <div className= "navigation-panel">
                            <ul className = "nav-list">
                                <li className= "nav-links"><Link to={"./portfolio"} className = "nav-a nav-a1">PORTFOLIO<i className="arrow-see1"></i></Link></li>
                                <li className= "nav-links"><Link to={"./skills"} className= "nav-a nav-a2">SKILLS<i className="arrow-see2"></i></Link></li>
                                <li className= "nav-links"></li>
                                <li className= "nav-links"></li>
                                <li className= "nav-links"><Link className= "nav-a nav-a3" to = {"./contact"}>CONTACT ME<i className="arrow-see3"></i></Link></li>
                                <li className= "nav-links"><Link className= "nav-a nav-a4" to = {"/resume"}>MY RESUME<i className="arrow-see4"></i></Link></li>
                            </ul>
                        </div>

                        <div className = "icon-panel">
                            <p className= "icon-title">Get in touch</p>
                                <ul className= "icon-ul">
                                    <li className= "icon-li"><a className= "icons-a" href = "mailto:nayangoswami008@gmail.com">
                                        <i className="envelope closed icon main-icons"></i></a></li>
                        <li className= "icon-li"><a className= "icons-a" href = "https://www.linkedin.com/in/nayan-goswami-b6b780165/">
                            <i className="linkedin icon main-icons"></i></a></li>
                                    <li className= "icon-li"><a className= "icons-a" href = "https://github.com/NayanRGoswami">
                                        <i className="github square icon main-icons"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Sidebar;
