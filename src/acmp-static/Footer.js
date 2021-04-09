import React from 'react';

const Footer = ()=>{
   
    return(
        <footer className="social-media">
                <div className="social-box">
                <a className= "social-icon" target = "_blank" href="https://www.linkedin.com/in/acmp-arizona/"><i class="icon ion-logo-linkedin"></i></a>
            
                <a className= "social-icon" target = "_blank" href="https://www.facebook.com/ACMPArizona"> <i class="icon ion-logo-facebook"></i></a>
            
                <a className= "social-icon" href="mailto:acmparizona@gmail.com"><i class="icon ion-md-mail e-mail-icon"></i></a>
                </div>
                <p class="copy-right">&copy;2019 by ACMP Arizona Chapter.</p>
        
    </footer>
    )
}
export default Footer;