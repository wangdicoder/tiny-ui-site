import React, {Component} from 'react';
import './App.css';
import HomePage from "./Home";
import SideBar from "../components/SideBar/index";
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import SideBarCover from "../components/SideBarCover/SideBarCover";
import {disabledSideBar, displaySideBar, closeSideBar} from '../utils/sidebar';
import menu from '../assets/menu1.svg';

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
import SpinnerPage from './Components/Spinner';
import AlertPage from './Components/Alert';
import TimelinePage from './Components/Timeline';
import BadgePage from './Components/Badge';
import MessagePage from './Components/Message'

class App extends Component {

    render() {
        return (
            <div className="App">
                <SideBar history={this.props.history}/>
                <button className="menu" onClick={() => {
                    displaySideBar()
                }}><img src={menu} alt="menu"/></button>
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
                        <Route path="/components/spinner" component={SpinnerPage}/>
                        <Route path="/components/alert" component={AlertPage}/>
                        <Route path="/components/timeline" component={TimelinePage}/>
                        <Route path="/components/message" component={MessagePage}/>
                        <Route path="/components/badge" component={BadgePage}/>
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

        window.addEventListener('resize', (evt) => {
            if (document.body.clientWidth <= 750) {
                closeSideBar();
            }else{
                displaySideBar();
            }
        });
    }

    // listen to the router changes
    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (location.pathname !== '/') {
                disabledSideBar();
            }

            if (document.body.clientWidth <= 750) {
                closeSideBar();
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }
}

export default withRouter(App);
