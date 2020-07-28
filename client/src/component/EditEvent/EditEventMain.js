import React, { Component } from 'react';
import EditEvent from './EditEvent';
import TitleBanner from '../TitleBanner/TitleBanner';

export default class EditEventMain extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"Edit Your Event"} />
                <EditEvent eventid={this.props.match.params.id}/>                
            </div>
        )
    }
}
