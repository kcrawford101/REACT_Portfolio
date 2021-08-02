import React from 'react';
import '../Footer/Footer.css';
import { Row }from "react-bootstrap";

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>            
            <div className="row">
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Kevin Crawford's Portfolio
                </p>
            </div>            
        </div>
    </div>
    )
}

export default Footer;