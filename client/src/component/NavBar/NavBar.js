import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {

    render() {

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: "#008272"}}>
            
                <div className="navbar-brand text-white"><b>AdEvento</b></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li className="nav-item active">
                        <Link to="/"><div className="nav-link text-white"><b>Home</b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li className="nav-item active">
                        <Link to="/allevent"><div className="nav-link text-white"><b>All Events</b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li className="nav-item active">
                        <Link to="/addevent"><div className="nav-link text-white"><b>Add Event</b><span className="sr-only">(current)</span></div></Link>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li className="nav-item active">
                        <Link to="/publishedevent"><div className="nav-link text-white"><b>Event Operation</b><span className="sr-only">(current)</span></div></Link>
                        </li>                        
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active" >                                
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon classNameName="faicons" icon={faUser} /><span>&nbsp;&nbsp;</span>
                                    <b>My Account</b>
                                </a>

                                
                            </li>
                        </ul>                        
                    </form>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                </div>
            </nav>
        )
    }
}
