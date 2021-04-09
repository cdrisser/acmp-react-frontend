import React from 'react';

import './Footer.css'
const Footer = ()=>{
    return(
        <footer className ="social-media">
            <div className ="social-box">
            <a className = "social-icon" target = "_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/acmp-arizona/"><ion-icon name="logo-linkedin"></ion-icon></a>

            <a className = "social-icon" target = "_blank" href="https://www.facebook.com/ACMPArizona" rel="noopener noreferrer"> <ion-icon name="logo-facebook"></ion-icon></a>
        
            <a className = "social-icon" href="mailto:acmparizona@gmail.com" rel="noopener noreferrer"><ion-icon className=
            'social-icon' name="mail-sharp"></ion-icon></a>
            </div>
            <div className='cr-contact'>
                <img className='cr-logo' alt='Chris Risser logo' src={require('../../images/cr-logo.png')}></img>
                <p>Built by<a target='_blank' href="https://www.chrisrisser.com" rel="noopener noreferrer"> Chris Risser</a></p>
            </div>
            <p className="copy-right">&copy;2019 ACMP Arizona Chapter</p>

</footer>
    )
}
export default Footer;