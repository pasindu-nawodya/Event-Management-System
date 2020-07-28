import React, { Component } from 'react';
import TitleBanner from '../TitleBanner/TitleBanner';
import AllEvent from './AllEvent';

export default class ProductListTable extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"Event List"} />
                <AllEvent />
            </div>
        )
    }
}
