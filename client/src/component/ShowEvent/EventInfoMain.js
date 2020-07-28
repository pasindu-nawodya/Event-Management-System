import React, { Component } from 'react';
import TitleBanner from '../TitleBanner/TitleBanner';
import EventInfo from './EventInfo';

export default class EventInfoMain extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"Event Details"}/>
                <EventInfo eventid={this.props.match.params.id}/>              
            </div>
        )
    }
}
