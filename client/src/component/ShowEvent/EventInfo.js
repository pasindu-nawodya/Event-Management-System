import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class EventInfo extends Component {

    constructor(props) {
        super(props)    
        this.state = {
            event:[]
          }
      }

      //fetch data
      componentDidMount(){
        fetch('http://localhost:4000/event/'+ this.props.eventid)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                event:json,
            })

            console.log(json)
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="order-md-1 w-50 mt-3 m-auto">
                            <form className="needs-validation" onSubmit={this.onSubmit} noValidate>
                                
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Event Name</span>
                                    </div>
                                    <input type="text" name="ename" value={this.state.event.ename} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Event Date</span>
                                    </div>
                                    <input type="date" name="edate" value={this.state.event.edate}  onChange={this.onChangeedate} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Time</span>
                                    </div>
                                    <input type="time" name="etime" value={this.state.event.etime}  onChange={this.onChangeetime} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                </div>

                                <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" for="inputGroupSelect01">Event Category</label>
                                </div>
                                <select name="ecategory" className="custom-select" onChange={this.onChangeecategory} id="inputGroupSelect01" disabled>
                                    <option selected value={this.state.event.ecategory} >{this.state.event.ecategory} </option>                                    
                                    <option value="Technology">Tecnology</option>   
                                    <option value="Social">Social</option>
                                    <option value="Education">Education</option>
                                    <option value="Health">Health</option>
                                    <option value="Carrer">Carrer</option>
                                    <option value="Other">Other</option>                                  
                                 </select>
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Place</span>
                                    </div>
                                    <input type="text" name="eplace" value={this.state.event.eplace}  onChange={this.onChangeeplace} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Details</span>
                                    </div>
                                    <input type="text" name="edetails" value={this.state.event.edetails} onChange={this.onChangeeorganizer} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                </div>
                                
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Ticket</span>
                                    </div>
                                    <input type="text" name="eticket" value={this.state.event.eticket} onChange={this.onChangeeticket} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled/>                                 
                                </div>
                               

                                <div className="row">                                    
                                    <div className="col-md-6 m-auto">
                                        <Link to="/"><button type="button" className="btn btn-danger btn-lg btn-block">Back</button></Link>
                                        <br/>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
