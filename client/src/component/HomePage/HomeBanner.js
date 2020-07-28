import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import content1 from './img/content1.jpg';
import content2 from './img/content2.jpg';
import logo from './img/logo.png';

export default class HomeBanner extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  </ol>
                  <div className="h-50 d-block carousel-inner">
                    <div className="carousel-item active">
                      <img src={content1} style={{height:"500px",width:"100%",opacity:"0.7"}} alt="..." />
                      <div className="carousel-caption ">
                        <h1><Link to="/allevent"><button className="btn btn-success">EXPLORE EVENTS</button></Link></h1>
                      </div>
                    </div>
                    <div className="carousel-item text-right">
                      <img src={content2} style={{height:"500px",width:"100%",opacity:"0.7"}} alt="..." />
                      <div className="carousel-caption ">
                        <h1><Link to="/addevent"><button className="btn btn-success">ADD EVENET</button></Link></h1>
                      </div>
                    </div>
                  </div>
                
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
              </div>  

              <center>
                <div className="card text-center mt-5 mb-5 w-75">
                    <div class="card-header">
                        <h3><b>Publish Your Event Here</b></h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Get More Audience</h5>
                        <p className="card-text"></p>
                        <Link to="/addevent"><button className="btn btn-danger">Add Event</button></Link>
                    </div>
                    <div className="card-footer text-muted">
                       AdEvento.com
                    </div>
                </div>
                </center>
                
            </div>
        )
    }
}

