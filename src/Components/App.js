import React from 'react';
import {Router, Route, Redirect} from 'react-router';
import { createBrowserHistory } from 'history';
import $ from 'jquery';

import Home from "./Home";
import Sidebar from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import Resume from "./Resume";
import Twotrees from "./Moredetails/Twotrees";
import Eshoppers from "./Moredetails/Eshoppers";
import Londoners from "./Moredetails/Londoners";
import Lamp from "./Moredetails/Lamp";
import Gameartist from "./Moredetails/Gameartist";

class App extends React.Component {

    componentDidMount = () => {

    }


    render(){
        return (
           <Router history={createBrowserHistory()} >
               <Redirect from="/" to="/home" />
               <Route path = {"/home"} component = {Home}/>
               <Route path = {"/portfolio"} component = {Sidebar}/>
               <Route path = {"/skills"} component = {Skills}/>
               <Route path = {"/contact"} component = {Contact}/>
               <Route path = {"/resume"} component = {Resume}/>
               <Route path = {"/twotrees"} component={Twotrees}/>
               <Route path = {"/eshoppers"} component={Eshoppers}/>
               <Route path = {"/londoners"} component={Londoners}/>
               <Route path = {"/mws"} component={Lamp}/>
           </Router>
        );
    }
}

export default App;
