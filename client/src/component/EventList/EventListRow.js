import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class BookingListRow extends Component {

    constructor(props) {
        super(props);
    }

    //delete item
    handleDelete(bid) {
        alert("Booking Deleted!");
        axios.delete('http://localhost:4000/event/' + bid)
            .then((res) => {
                console.log('Booking Deleted!')
            }).catch((error) => {
                console.log(error)
            })
        window.location='/publishedevent';
    }

    render() {
        
        //var count = 0;
        return (
            
            <tr key={this.props.obj._id} >
                <th scope="row">{this.props.count}</th>
                <td>{this.props.obj.edate}</td>
                <td>{this.props.obj.etime}</td>
                <td>{this.props.obj.ename}</td>
                <td><Link to={"/editevent/" + this.props.obj._id}><button className="btn btn-success">update</button></Link></td>
                <td><button onClick={() => this.handleDelete(this.props.obj._id)} 
                            className="btn btn-danger">delete
                    </button></td>
            </tr>  
            
        )
    }
}
