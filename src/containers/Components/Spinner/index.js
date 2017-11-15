/**
 * Created by wangdi on 15/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import {Spinner} from 'tiny-ui';
import {data} from './api';

import sp1 from './icons/loading.svg';
import sp2 from './icons/loading1.svg';
import sp3 from './icons/loading2.svg';
import sp4 from './icons/synchronize.svg';
import sp5 from './icons/snow.svg';
import APITable from "../../../components/APITable/index";


export default class SpinnerPage extends Component{

    render(){
        return (
            <div className="default-container">
                <APIHeader title="Spinner">
                    Define an infinitely rotatable component.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                <Spinner>
                    <img src={sp1} alt="x" width={40}/>
                </Spinner>
                <Spinner duration={2}>
                    <img src={sp1} alt="x" width={40}/>
                </Spinner>
                <Spinner>
                    <img src={sp2} alt="x" width={40}/>
                </Spinner>
                <Spinner>
                    <img src={sp3} alt="x" width={40}/>
                </Spinner>
                <Spinner reverse={true}>
                    <img src={sp4} alt="x" width={40}/>
                </Spinner>
                <Spinner>
                    <img src={sp5} alt="x" width={40}/>
                </Spinner>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};