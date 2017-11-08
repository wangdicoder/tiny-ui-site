/**
 * Created by wangdi on 3/11/17.
 */
import React, {Component} from 'react';
import './hero-slider.css';
import {Button} from 'tiny-ui';
import github from '../../assets/github.svg';
import menu from '../../assets/menu.svg';
import {openSideBar} from '../../utils/sidebar';

export default class HeroSlider extends Component{

    render(){
        return (
            <div className="hero-slider">
                <h1 className="title">Tiny-UI</h1>
                <h2 className="desc">A Friendly UI Component Set for React</h2>
                <Button type="warning">Coming Soon</Button>

                <a href="https://github.com/wangdicoder/tiny-ui" target="_blank" rel="noopener noreferrer" className="github"><img src={github} alt="github"/></a>
                <button className="menu" onClick={() => {openSideBar()}}><img src={menu} alt="menu"/></button>
            </div>
        );
    }
}