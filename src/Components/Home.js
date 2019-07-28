import React from 'react';
import $ from 'jquery';
import '../Style/Home.css';
import './Introduction';
import '../Style/Mobile/Mobilehome.css';

import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Responsivehome from "./Mobile/Responsivehome";


class Home extends React.Component {

    componentDidMount = () => {

    }

    render(){
        return (
            <div className="home-pan">
                <img className= "center-fit" src= {require('../Images/background.jpg')} alt="Landscape"/>
                <Sidebar/>
                <Introduction/>
                <Responsivehome/>
            </div>
        );
    }
}

export default Home;
