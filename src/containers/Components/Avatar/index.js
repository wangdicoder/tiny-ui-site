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
                    Avatars can be used to represent people or objects.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                TBA
                <h2 className="subtitle">API</h2>
                TBA
            </div>
        );
    }
};