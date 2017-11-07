/**
 * Created by wangdi on 7/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";

export default class AvatarPage extends Component{

    render(){
        return (
            <div className="default-container">
                <APIHeader title="Avatar">
                    This button is used to add dimension to mostly flat layouts and emphasizes important functions on your page.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>

                <h2 className="subtitle">API</h2>
            </div>
        );
    }
};