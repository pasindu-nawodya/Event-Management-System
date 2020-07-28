import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {

        var d = new Date();
        var n = d.getFullYear();

        return (   
        
            <div>
                <div className="position"></div>
                
                <div className="footer-copyright bg-dark text-center py-3  text-light">© {n} Copyright: 
                    <Link to="/"> AdEvento.com</Link>
                </div>

            </div>
            

        )
    }
}
