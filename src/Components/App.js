import React from 'react';
import {Router, Route} from 'react-router';
import { createBrowserHistory } from 'history';
import $ from 'jquery';

import Home from "./Home";
import Sidebar from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import Resume from "./Resume";

class App extends React.Component {

    componentDidMount = () => {

    }


    render(){
        return (
           <Router history={createBrowserHistory()} >
               <Route path = {"/home"} component = {Home}/>
               <Route path = {"/portfolio"} component = {Sidebar}/>
               <Route path = {"/skills"} component = {Skills}/>
               <Route path = {"/contact"} component = {Contact}/>
               <Route path = {"/resume"} component = {Resume}/>
           </Router>
        );
    }
}

export default App;
