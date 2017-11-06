/**
 * Created by wangdi on 6/11/17.
 */
import React, {Component} from 'react';
import './side-bar.css';
import {Link, withRouter} from 'react-router-dom';

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
        document.querySelector('.side-bar').style.width = '0';
    }
}

export default withRouter(SideBar);