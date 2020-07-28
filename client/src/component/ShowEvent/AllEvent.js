import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AllEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/event')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
            })
            console.log(json)
        });
    }



    render() {

        var {isLoaded,items} = this.state;

        if(!isLoaded){
            return (<center> 
                        <br />
                        <br />                   
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h5> <b><br />Wait ! Data Is Loading ... </b></h5>
                    </center>
            )
        }

        return (
            <div>
                {items.map(item=>(
                    <div className="mt-3 mb-3" key={item._id}>                 
                        <div class="card text-center w-50 m-auto" >
                            <div class="card-header">
                                <b>{item.ename}</b>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{item.ename}</h5>
                                <p class="card-text">{item.edetails}</p>
                                <p class="card-text">Place : {item.eplace}</p>
                                <p class="card-text">{item.edate} &nbsp; | &nbsp;{item.etime}</p>
                                <Link to={"/eventinfo/" + item._id}><button className="btn btn-primary">More Details</button></Link>
                            </div>
                            <div class="card-footer text-muted">
                            Event Date :  {item.edate}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
