import React from 'react';
import heroimg from '../../images/hero.JPG';


const Hero = () => {
    return (
        <div>
            <img style={{marginBottom: '20px', width: '100%'}} src={heroimg} fluid ></img>
        </div>        
    )
}

export default Hero;