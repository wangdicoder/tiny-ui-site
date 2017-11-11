/**
 * Created by wangdi on 7/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import {data} from './api';
import APITable from "../../../components/APITable/index";
import {Avatar} from 'tiny-ui';

export default class AvatarPage extends Component{

    render(){
        return (
            <div className="default-container">
                <APIHeader title="Avatar">
                    Avatars can be used to represent people or objects.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                <Avatar src="https://s.gravatar.com/avatar/cd5a734ef07be36b4e68220e53ff2553?size=496&default=retro" onClick={()=>{window.open('https://github.com/wangdicoder')}}/>
                <Avatar src="https://avatars2.githubusercontent.com/u/7374042?s=460&v=4" borderRadius="5px"/>
                <Avatar>UI</Avatar>
                <Avatar raised>UI</Avatar>
                <Avatar raised backgroundColor="#ff9800"><i className="fa fa-motorcycle fa-2x" aria-hidden="true"/></Avatar>
                <Avatar raised backgroundColor="#9c27b0">UI</Avatar>
                <Avatar raised backgroundColor="#e91e63">MS</Avatar>
                <Avatar raised backgroundColor="#f44336" size="40px">Ti</Avatar>
                <Avatar raised backgroundColor="#4caf50" size="90px" borderRadius="0">LG</Avatar>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};