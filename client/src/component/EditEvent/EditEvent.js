import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class EditEvent extends Component {

    constructor(props) {
        super(props)
    
        this.onChangeename = this.onChangeename.bind(this);
        this.onChangeedate = this.onChangeedate.bind(this);
        this.onChangeetime = this.onChangeetime.bind(this);
        this.onChangeecategory = this.onChangeecategory.bind(this);
        this.onChangeeplace = this.onChangeeplace.bind(this);
        this.onChangeedetails = this.onChangeedetails.bind(this);
        this.onChangeeticket = this.onChangeeticket.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    
    
        this.state = {
            ename: '',
            edate: '',
            etime:'',
            ecategory:'',
            eplace:'',
            edetails:'',
            eticket:'',
          }
      }

      //fetch data
      componentDidMount(){
        fetch('http://localhost:4000/event/'+ this.props.eventid)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                ename:json.ename,
                edate:json.edate,
                etime:json.etime,
                ecategory:json.ecategory,
                eplace:json.eplace,
                edetails:json.edetails,
                eticket:json.eticket,
            })

            console.log(json)
        });
    }
    
    onChangeename(e) {
        this.setState({ ename: e.target.value })
      }
    
      onChangeedate(e) {
        this.setState({ edate: e.target.value })
      }
    
      onChangeetime(e) {
        this.setState({ etime: e.target.value })
      }

      onChangeecategory(e) {
        this.setState({ ecategory: e.target.value })
      }

      onChangeeplace(e) {
        this.setState({ eplace: e.target.value })
      }

      onChangeedetails(e) {
        this.setState({ edetails: e.target.value })
      }
    
      onChangeeticket(e) {
        this.setState({ eticket: e.target.value })
      }

      //update booking
      onSubmit(e) {
        e.preventDefault()
    
        const EventObject = {
            ename:this.state.ename,
            edate:this.state.edate,
            etime:this.state.etime,
            ecategory:this.state.ecategory,
            eplace:this.state.eplace,
            edetails:this.state.edetails,
            eticket:this.state.eticket,
        };
    
        axios.put('http://localhost:4000/event/' + this.props.eventid, EventObject)
          .then((res) => {
            console.log(res.data)
            console.log('Evet successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
    
        window.location='/publishedevent';
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
                                    <input type="text" name="ename" value={this.state.ename} onChange={this.onChangeename} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Event Date</span>
                                    </div>
                                    <input type="date" name="edate" value={this.state.edate}  onChange={this.onChangeedate} className="form-control"  aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Time</span>
                                    </div>
                                    <input type="time" name="etime" value={this.state.etime}  onChange={this.onChangeetime} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>

                                <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" for="inputGroupSelect01">Event Category</label>
                                </div>
                                <select name="ecategory" className="custom-select" onChange={this.onChangeecategory} id="inputGroupSelect01" required>
                                    <option selected value={this.state.ecategory} >{this.state.ecategory} </option>                                    
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
                                    <input type="text" name="eplace" value={this.state.eplace}  onChange={this.onChangeeplace} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>

                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Details</span>
                                    </div>
                                    <input type="text" name="edetails" value={this.state.edetails} onChange={this.onChangeeorganizer} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>
                                
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Ticket</span>
                                    </div>
                                    <input type="text" name="eticket" value={this.state.eticket} onChange={this.onChangeeticket} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required/>                                 
                                </div>
                               

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <button type="submit"  className="btn btn-success btn-lg btn-block">UPDATE</button>
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
