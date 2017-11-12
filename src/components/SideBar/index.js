/**
 * Created by wangdi on 6/11/17.
 */
import React, {Component} from 'react';
import './side-bar.css';
import {NavLink} from 'react-router-dom';
import {closeSideBar} from '../../utils/sidebar';
import {Accordion} from 'tiny-ui';
import {routers} from './router';

class SideBar extends Component {


    render() {
        return (
            <div className="side-bar">
                <button className="home-btn" onClick={this._homeBtnOnClick.bind(this)}>Tiny-UI</button>
                <Accordion activeKeys={['0', '1', '2']} className="list-container">
                    <Accordion.Panel header="Get Started" isArrowOnRight={true} headerClassName="header-panel">
                        <div className="list">
                            <NavLink to="/get-started/installation" activeClassName="active">Installation</NavLink>
                            <NavLink to="/get-started/usage" activeClassName="active">Usage</NavLink>
                            <NavLink to="/get-started/why-friendly" activeClassName="active">Why Friendly</NavLink>
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel header="Components" isArrowOnRight={true} headerClassName="header-panel">
                        <div className="list">
                            {routers.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0).map((router, i) => {
                                const to = `/components/${router.route}`;
                                return <NavLink key={i} to={to} activeClassName="active">{router.name}</NavLink>
                            })}
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel header="Resources" isArrowOnRight={true} headerClassName="header-panel">
                        <div className="list">
                            <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">W3Schools</a>
                            <a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>
                        </div>
                    </Accordion.Panel>
                </Accordion>
            </div>
        );
    }

    _homeBtnOnClick() {
        this.props.history.push('/');
        closeSideBar();
    }
}

export default SideBar;