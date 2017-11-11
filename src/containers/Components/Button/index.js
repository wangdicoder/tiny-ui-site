/**
 * Created by wangdi on 7/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import APITable from "../../../components/APITable/index";
import {Button} from 'tiny-ui';
import {data} from './api';

export default class ButtonPage extends Component {

    render() {
        return (
            <div className="default-container">
                <APIHeader title="Button">
                    Defines a clickable component
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                <section className="example-section">
                    <div className="row">
                        <div className="col col-display-row">
                            <Button>default</Button>
                            <Button type="primary">primary</Button>
                            <Button type="success">success</Button>
                            <Button type="warning">warning</Button>
                            <Button type="info">info</Button>
                            <Button type="danger">danger</Button>
                            <Button type="rose">rose</Button>
                        </div>
                        <div className="col col-display-row">
                            <Button type="primary" size="xs">x-small</Button>
                            <Button type="primary" size="sm">small</Button>
                            <Button type="primary">normal</Button>
                            <Button type="primary" size="lg">large</Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-display-row">
                            <Button isOutline={true}>default</Button>
                            <Button isOutline={true} type="primary">primary</Button>
                            <Button isOutline={true} type="success">success</Button>
                            <Button isOutline={true} type="warning">warning</Button>
                            <Button isOutline={true} type="info">info</Button>
                            <Button isOutline={true} type="danger">danger</Button>
                            <Button isOutline={true} type="rose">rose</Button>
                        </div>
                        <div className="col col-display-row">
                            <Button type="info">Normal</Button>
                            <Button type="info" isRound={true}>Round</Button>
                            <Button type="info" disabled={true}>Disable</Button>
                            <Button type="info" disabled={true} isOutline={true}>Disable</Button>
                        </div>
                    </div>
                </section>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};

/**
 * {
                name: '',
                type: '',
                default: '',
                desc: ''
            }
 *
 **/