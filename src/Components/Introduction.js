import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../Style/Introduction.css';

class Introduction extends React.Component {

    componentDidMount = () => {

    }

    render(){
        return (
            <div className= "introduction">
                  <div className = "intro-panel">
                      <h1 className= "line-a">Hi, I am Nayan,</h1>
                      <h2 className= "line-b">a web developer specialized in</h2>
                      <h2 className= "line-c">front-end and back-end web development.</h2>
                  </div>

                  <div className = "buttons">
                      <Link to = "/portfolio" className = "portfolio-button main-buttons">PORTFOLIO</Link><br/><br/><br/>
                      <Link to = {"./skills"} className = "skills-button main-buttons">SKILLS</Link>
                  </div>
            </div>
        );
    }
}

export default Introduction;
