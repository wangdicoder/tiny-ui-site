/**
 * Created by wangdi on 6/11/17.
 */
import React, {Component} from 'react';
import './side-bar.css';
import {Link} from 'react-router-dom';
import {closeSideBar} from '../../utils/sidebar';
import {Accordion} from 'tiny-ui';

class SideBar extends Component {

    render() {
        return (
            <div className="side-bar">
                <button onClick={this._homeBtnOnClick.bind(this)}>Home</button>
                <Accordion activeKeys={[]} className="list-container">
                    <Accordion.Panel header="Get Started" isArrowOnRight={true}>
                        <div className="list">
                            <Link to="/get-started/installation">Installation</Link>
                            <Link to="/get-started/usage">Usage</Link>
                            <Link to="/get-started/why-friendly">Why Friendly</Link>
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel header="Components" isArrowOnRight={true}>
                        <div className="list">
                            <Link to="/components/button">Button</Link>
                            <Link to="/components/avatar">Avatar</Link>
                            <Link to="/components/fab-button">Fab Button</Link>
                            <Link to="/components/input">Input</Link>
                        </div>
                    </Accordion.Panel>
                </Accordion>
            </div>
        );
    }

    _homeBtnOnClick(){
        this.props.history.push('/');
        closeSideBar();
    }
}

export default SideBar;