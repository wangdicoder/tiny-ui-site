/**
 * Created by wangdi on 15/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import {Alert} from 'tiny-ui';
import APITable from "../../../components/APITable/index";
import {data} from './api';

export default class AlertPage extends Component{

    render(){
        return (
            <div className="default-container">
                <APIHeader title="Alert">
                    Displays important alert messages.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                <Alert>This is a primary type alert</Alert>
                <Alert type="success">This is a success type alert</Alert>
                <Alert type="info">This is a info type alert</Alert>
                <Alert type="warning">This is a warning type alert</Alert>
                <Alert type="danger">This is a danger type alert</Alert>
                <Alert type="rose">This is a rose type alert</Alert>
                <Alert type="rose" closable={false}>This alert cannot be closed</Alert>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};