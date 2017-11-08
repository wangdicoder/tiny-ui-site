/**
 * Created by wangdi on 7/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import APITable from "../../../components/APITable/index";
import {Button} from 'tiny-ui';

export default class ButtonPage extends Component {

    render() {
        const data = [
            {
                name: 'type',
                type: 'string',
                default: 'default',
                desc: "button's style, available parameters: 'primary', 'rose', 'success', 'info', 'warning', 'danger' "
            },
            {
                name: 'onClick',
                type: 'function',
                default: '-',
                desc: 'set the handler to handle click event'
            },
            {
                name: 'size',
                type: 'string',
                default: 'default',
                desc: "button's size, available parameters: 'lg', 'sm', 'xs'"
            },
            {
                name: 'uppercase',
                type: 'boolean',
                default: 'true',
                desc: 'determine the label\'s transform'
            },
            {
                name: 'isRound',
                type: 'boolean',
                default: 'false',
                desc: 'button\'s shape'
            },
            {
                name: 'isOutline',
                type: 'boolean',
                default: 'false',
                desc: 'if true, the button\'s background will disappear'
            },
            {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                desc: 'if true, the button cannot be clicked'
            },
            {
                name: 'className',
                type: 'string',
                default: '-',
                desc: 'The CSS class name of the root element.'
            }
        ];

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