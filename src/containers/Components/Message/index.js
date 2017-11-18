/**
 * Created by wangdi on 19/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import {Message, Button} from 'tiny-ui';
import './message.css';
import APITable from "../../../components/APITable/index";
import {data} from './api';

export default class MessagePage extends Component{

    render(){
        return (
            <div className="default-container">
                <APIHeader title="Message">
                    Message provides a lightweight feedback by showing a brief message.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                <Button onClick={()=>{
                    Message.show("I'm a message");
                }} type="primary" uppercase={false}>Normal Message</Button>

                <Button onClick={()=>{
                    Message.show("Duration is 5000ms", {duration: 5000});
                }} type="primary" uppercase={false}>Duration</Button>

                <Button onClick={()=>{
                    Message.show("Offset 90px from top", {offset: '90px'});
                }} type="primary" uppercase={false}>Offset</Button>

                <Button onClick={()=>{
                    Message.show("Animation Time is 1000ms", {animationTime: 1000});
                }} type="primary" uppercase={false}>Animation Time</Button>

                <Button onClick={()=>{
                    Message.show("I'm a message from Bottom", {position: 'bottom'});
                }} type="primary" uppercase={false}>Display from BOTTOM</Button>

                <Button onClick={()=>{
                    Message.show(<div className="custom-container">
                        <span>I'm a custom message<span role="img" aria-label="emoji">🤔</span></span>
                        <button>✕</button>
                    </div>, {className: 'message-custom'});
                }} type="primary" uppercase={false}>Custom Message</Button>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};