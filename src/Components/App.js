import React from 'react';
import {Router, Route} from 'react-router';
import { createBrowserHistory } from 'history';
import $ from 'jquery';

import Home from "./Home";
import Sidebar from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import Resume from "./Resume";
import Twotrees from "./Moredetails/Twotrees";
import Eshoppers from "./Moredetails/Eshoppers";

class App extends React.Component {

    componentDidMount = () => {

    }


    render(){
        return (
           <Router history={createBrowserHistory()} >
               <Route path = {""} component = {Home}/>
               <Route path = {"/home"} component = {Home}/>
               <Route path = {"/portfolio"} component = {Sidebar}/>
               <Route path = {"/skills"} component = {Skills}/>
               <Route path = {"/contact"} component = {Contact}/>
               <Route path = {"/resume"} component = {Resume}/>
               <Route path = {"/twotrees"} component={Twotrees}/>
               <Route path = {"/eshoppers"} component={Eshoppers}/>
           </Router>
        );
    }
}

export default App;
