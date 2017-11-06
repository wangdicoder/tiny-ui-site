/**
 * Created by wangdi on 6/11/17.
 */
import React, {Component} from 'react';
import './side-bar-cover.css';
import {closeSideBar} from '../../utils/sidebar';

export default class SideBarCover extends Component{

    render(){
        return (
            <div className="side-bar-cover" onClick={() => {closeSideBar()}}/>
        );
    }
}