import React, { Component } from 'react';
import EventListRow from './EventListRow';
import axios from 'axios';

export default class BookingList extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            count:0,
        }
    }

    
    componentDidMount(){
        fetch('http://localhost:4000/event')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                items:json,
                count:0,
            })

            console.log(json)
        });
    }

    //TableRow
    DataTable() {
        
        var count=0;
        return this.state.items.map((res, i) => {
          return <EventListRow obj={res} count={++count} key={i} />;
        });
    }

    
    render() {
        var {items,count} = this.state;
        return (
            
            <div className="mt-5">
                <div className="w-50 m-auto">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTable()}
                        </tbody>
                    </table>  
                </div>
            </div>
        )
    }
}
