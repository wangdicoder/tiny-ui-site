/**
 * Created by wangdi on 3/11/17.
 */
import React, {Component} from 'react';
import HeroSlider from "../../components/HeroSlider";
import './home.css';

export default class HomePage extends Component{

    render(){
        return (
            <div className="home-container">
                <HeroSlider />
            </div>
        );
    }
}