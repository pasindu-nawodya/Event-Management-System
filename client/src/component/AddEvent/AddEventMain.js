import React, { Component } from 'react';
import AddEvent from './AddEvent';
import TitleBanner from '../TitleBanner/TitleBanner';

export default class AddEventMain extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"Publish Your Event"} />
                <AddEvent />                
            </div>
        )
    }
}
