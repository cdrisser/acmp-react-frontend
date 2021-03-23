import React from 'react';

import Userlogin from "../components/Userlogin"
import './Userauth.css';

const Userauth = props =>{
    return(
             <div className='header-photo-container'>
           
           <div className='header-photo'>
           <h2>ACMP ARIZONA MEMBERS</h2>
           
       </div>
            <Userlogin style='dashboard-login authenticate-padding'/>
        </div>
    )
}

export default Userauth;