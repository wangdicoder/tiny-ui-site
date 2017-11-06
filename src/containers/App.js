import React, {Component} from 'react';
import './App.css';
// import {Button} from 'tiny-ui';
import HomePage from "./Home";
import ComponentsPage from './Components';
import SideBar from "../components/SideBar/index";
import {Route, withRouter} from 'react-router-dom';
import SideBarCover from "../components/SideBarCover/SideBarCover";
import {disabledSideBar} from '../utils/sidebar';

class App extends Component {

    render() {
        return (
            <div className="App">
                <SideBar history={this.props.history}/>
                <main>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/components" component={ComponentsPage}/>
                </main>
                <SideBarCover/>
            </div>
        );
    }

    // listen to the router changes
    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (location.pathname !== '/') {
                disabledSideBar();
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }
}

export default withRouter(App);
