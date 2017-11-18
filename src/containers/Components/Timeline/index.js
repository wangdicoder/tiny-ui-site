/**
 * Created by wangdi on 16/11/17.
 */
import React, {Component} from 'react';
import '../../App.css';
import APIHeader from "../../../components/APIHeader/index";
import {Timeline} from 'tiny-ui';

import icon1 from './icons/register.svg';
import icon2 from './icons/meeting.svg';
import icon3 from './icons/lunch.svg';
import icon4 from './icons/rest.svg';
import APITable from "../../../components/APITable/index";
import {data} from './api';

export default class TimelinePage extends Component {

    render() {
        const events = [
            {
                icon: icon1,
                color: '#7955f2',
                title: '9:00 am',
                subtitle: 'Register',
            },
            {
                icon: icon2,
                color: '#F2453D',
                title: '10:00 am',
                subtitle: 'Meeting',
            },
            {
                icon: icon3,
                color: '#1FBCD3',
                title: '12:00 pm',
                subtitle: 'Lunch',
            },
            {
                icon: icon4,
                color: '#50AE54',
                title: '13:00 pm',
                subtitle: 'Break',
            }
        ];

        return (
            <div className="default-container" style={{backgroundColor: '#eee'}}>
                <APIHeader title="Timeline">
                    A responsive "timeline" component.
                </APIHeader>

                <h2 className="subtitle">Examples</h2>
                <Timeline>
                    {events.map((item, i) => {
                        return (
                            <Timeline.Panel
                                key={i}
                                iconBackgroundColor={item.color}
                                icon={<img src={item.icon} alt="x" width={20}/>}>
                                <div>
                                    <h2 style={{margin: 0}}>{item.title} <span style={{fontSize: '15px', fontWeight: '400'}}> - {item.subtitle}</span></h2>
                                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                        mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te
                                        elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                                </div>

                            </Timeline.Panel>
                        );
                    })}
                </Timeline>

                <h2 className="subtitle">API</h2>
                <APITable data={data}/>
            </div>
        );
    }
};