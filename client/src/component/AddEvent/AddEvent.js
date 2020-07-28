import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddEvent extends Component {

    state = {
        ename: '',
        edate: '',
        etime:'',
        ecategory:'',
        eplace:'',
        edetails:'',
        eticket:'',
      }
    
      handleChange = event => {
        this.setState({ 
            [event.target.name]:event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        //make post request
        alert('Add Event Successfully!')
        axios.post(`http://localhost:4000/event/`, this.state)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          window.location='/publishedevent';
      }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="order-md-1 w-50 mt-3 m-auto">
                            <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>
                                
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Event Name</span>
                                    </div>
                                    <input type="text" name="ename" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Event Date</span>
                                    </div>
                                    <input type="date" name="edate" onChange={this.handleChange} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Time</span>
                                    </div>
                                    <input type="time" name="etime" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>

                                <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" for="inputGroupSelect01">Event Category</label>
                                </div>
                                <select name="ecategory" className="custom-select" onChange={this.handleChange} id="inputGroupSelect01" required>
                                    <option selected value="null">Select event Category</option>                                    
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
                                    <input type="text" name="eplace" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                    </div>
                                    <input type="text" name="edetails" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>
                                
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Ticket</span>
                                    </div>
                                    <input type="text" name="eticket" onChange={this.handleChange} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>
                               

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <button type="submit"  className="btn btn-primary btn-lg btn-block">PUBLISH</button>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Link to="/"><button type="button" className="btn btn-danger btn-lg btn-block">CANCEL</button></Link>
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
