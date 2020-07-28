import React, { Component } from 'react';
import EventList from './EventList';
import TitleBanner from '../TitleBanner/TitleBanner';

export default class EventListMain extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"Events You Published"} />
                <EventList />                
            </div>
        )
    }
}
