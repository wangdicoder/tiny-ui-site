/**
 * Created by wangdi on 7/11/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './api-header.css';

export default class APIHeader extends Component {

    static propTypes = {
        title: PropTypes.string,
    };

    render() {
        return (
            <div className="api-header">
                <h1 className="title">{this.props.title}</h1>
                <span className="desc">
                    {this.props.children}
                </span>
            </div>
        );
    }
}