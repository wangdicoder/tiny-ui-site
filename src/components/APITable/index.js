/**
 * Created by wangdi on 7/11/17.
 */
import React, {Component} from 'react';
import './api-table.css';
import PropTypes from 'prop-types';

export default class APITable extends Component {

    static propTypes = {
        data: PropTypes.array
    };

    static defaultProps = {
        data: []
    };

    render() {
        return (
            <table className="api-table">
                <thead>
                <tr>
                    <th>property</th>
                    <th>type</th>
                    <th>default</th>
                    <th>description</th>
                </tr>
                </thead>
                <tbody>
                {this.props.data.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.default}</td>
                            <td>{item.desc}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}