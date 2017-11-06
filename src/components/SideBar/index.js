/**
 * Created by wangdi on 6/11/17.
 */
import React, {Component} from 'react';
import './side-bar.css';
import {Link} from 'react-router-dom';
import {closeSideBar} from '../../utils/sidebar';

class SideBar extends Component {

    render() {
        return (
            <div className="side-bar">
                <ul>
                    <li><button onClick={this._homeBtnOnClick.bind(this)}>Home</button></li>
                    <li><Link to="/components">Components</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
            </div>
        );
    }

    _homeBtnOnClick(){
        this.props.history.push('/');
        closeSideBar();
    }
}

export default SideBar;