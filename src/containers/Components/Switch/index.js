/**
 * Created by wangdi on 11/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import {Switch} from 'tiny-ui';
import {data} from './api';
import APITable from "../../../components/APITable/index";

export default class SwitchPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            switch1: false,
            switch2: true,
            switch3: true,
            switch4: true,
        };
    }

    render(){
        return (
            <div className="default-container">
                <APIHeader title="Switch">
                    Switch is used for switching between two opposing states.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                <Switch checked={this.state.switch1} onChange={value => this.setState({switch1: value})}/>
                <Switch checked={this.state.switch2} onChange={value => this.setState({switch2: value})} color="#9c27b0"/>
                <Switch checked={this.state.switch3} onChange={value => this.setState({switch3: value})} color="#f32c1e"/>
                <Switch checked={this.state.switch4} onChange={value => this.setState({switch4: value})} color="#4caf50"/>
                <Switch defaultChecked={true} disabled/>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};