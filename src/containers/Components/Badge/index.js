/**
 * Created by wangdi on 19/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import {data} from './api';
import APITable from "../../../components/APITable/index";
import {Badge, Button, Avatar} from 'tiny-ui';
import './badge.css';

export default class BadgePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <div className="default-container">
                <APIHeader title="Badge">
                    This component specifies an input field where the user can enter data.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>

                <div className="badge-wrapper">
                    <Button uppercase={false} type="primary"
                            onClick={() => this.setState({value: this.state.value + 1})}>Click Me (Max: 5)</Button>
                    <Badge value={this.state.value} max={5}/>
                </div>

                <div className="badge-wrapper">
                    <Button uppercase={false} type="success">Normal</Button>
                    <Badge value={1}/>
                </div>

                <div className="badge-wrapper">
                    <Button uppercase={false} type="success">Normal</Button>
                    <Badge value={10}/>
                </div>

                <div className="badge-wrapper">
                    <Button uppercase={false} type="success">Max Value</Button>
                    <Badge value={100} max={10}/>
                </div>

                <div className="badge-wrapper">
                    <Button uppercase={false} type="success">Label</Button>
                    <Badge value="New"/>
                </div>

                <div className="badge-wrapper">
                    <Button uppercase={false} type="success">Label</Button>
                    <Badge value="hot"/>
                </div>

                <div className="badge-wrapper">
                    <Button uppercase={false} type="warning">Badge Color</Button>
                    <Badge value="Cool" max={10} color="#1fbcd3"/>
                </div>

                <div className="badge-wrapper">
                    <Avatar>Dot</Avatar>
                    <Badge isDot={true} className="custom-badge"/>
                </div>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};