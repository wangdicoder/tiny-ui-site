import React, {Component} from 'react';
import './App.css';
// import {Button} from 'tiny-ui';
import HomePage from "./Home";
import ComponentsPage from './Components';
import SideBar from "../components/SideBar/index";
import {Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SideBar/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/components" component={ComponentsPage}/>
            </div>
        );
    }
}

export default App;
