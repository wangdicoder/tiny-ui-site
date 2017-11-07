/**
 * Created by wangdi on 7/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";

export default class FabButtonPage extends Component{

    render(){
        return (
            <div className="default-container">
                <APIHeader title="Fab Button">
                    This button is displayed as a circle shape. It supports images, Icons, or letters.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                TBA
                <h2 className="subtitle">API</h2>
                TBA
            </div>
        );
    }
};