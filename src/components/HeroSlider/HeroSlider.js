/**
 * Created by wangdi on 3/11/17.
 */
import React, {Component} from 'react';
import './hero-slider.css';
import {Button} from 'tiny-ui';
import github from '../../assets/github.svg';

export default class HeroSlider extends Component{

    render(){
        return (
            <div className="hero-slider">
                <h1 className="title">Tiny-UI</h1>
                <h2 className="desc">A Light-weight UI Component Set for React</h2>
                <Button
                    title="Coming Soon"
                    type="primary"
                />

                <a href="https://github.com/wangdicoder/Tiny-UI" target="_blank" rel="noopener noreferrer" className="github"><img src={github} alt="github"/></a>
            </div>
        );
    }
}