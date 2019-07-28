import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import $ from 'jquery';

import '../../Style/Mobile/Mobilecontact.css';
import Mobilenav from "./Mobilenav";
import {Link} from "react-router-dom";
import Tobar from "./Tobar";


class Mobilecontact extends React.Component {

    componentDidMount = () => {

    }

    render(){


        return (
            <div>
                <Tobar/>
                <Mobilenav/>
             <div className= "mobilecontact">
                <div className= "contact-main">
                    <h2 className= "contact-title">Contact Me</h2>
                    <p className= "contact-text">I am available for hire and can relocate for a good opportunity.</p>
                    <ul className= "contact-med-list">
                        <li><span className= "row-1-list">Email     :</span>
                            <a href="mailto:nayangoswami008@gmail.com">
                                <span className= "text-danger"><i className="envelope icon"></i> nayangoswami008@gmail.com</span></a></li>
                        <li><span className= "row-2-list">Mobile    :</span>
                            <span>
                                    <span className= "text-danger"><i className="mobile alternate icon"></i> 226-224-4712</span></span></li>
                        <br/>
                        <li><span className= "row-3-list">LinkedIn :</span>
                            <a href="https://www.linkedin.com/in/nayan-goswami-b6b780165/">
                                <span className= "text-danger"><i className="linkedin icon"></i>Nayan Goswami</span></a></li>
                        <li><span className= "row-4-list">Github    :</span>
                            <a href="https://github.com/NayanRGoswami">
                                <span className= "text-danger"><i className="github icon"></i>NayanRGoswami</span></a></li>
                    </ul>
                </div>
             </div>
            </div>
        );
    }
}

export default Mobilecontact;
