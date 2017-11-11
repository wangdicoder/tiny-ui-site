import React, {Component} from 'react';
import './App.css';
import HomePage from "./Home";
import SideBar from "../components/SideBar/index";
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import SideBarCover from "../components/SideBarCover/SideBarCover";
import {disabledSideBar, displaySideBar} from '../utils/sidebar';

//get started
import InstallationPage from './GetStarted/Installation';
import UsagePage from './GetStarted/Usage';
import WhyFriendlyPage from './GetStarted/WhyFriendly';

//components
import ButtonPage from './Components/Button';
import AvatarPage from './Components/Avatar';
import FabButtonPage from './Components/FabButton';
import InputPage from './Components/Input';
import SwitchPage from './Components/Switch';

class App extends Component {

    render() {
        return (
            <div className="App">
                <SideBar history={this.props.history}/>
                <main>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/get-started/installation" component={InstallationPage}/>
                        <Route path="/get-started/usage" component={UsagePage}/>
                        <Route path="/get-started/why-friendly" component={WhyFriendlyPage}/>
                        <Route path="/components/avatar" component={AvatarPage}/>
                        <Route path="/components/button" component={ButtonPage}/>
                        <Route path="/components/input" component={InputPage}/>
                        <Route path="/components/fab-button" component={FabButtonPage}/>
                        <Route path="/components/switch" component={SwitchPage}/>
                        <Redirect from="/get-started" to="/get-started/installation"/>
                        <Redirect from="/components" to="/components/avatar"/>
                    </Switch>
                </main>
                <SideBarCover/>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.history.location.pathname !== '/') {
            displaySideBar();
        }
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
