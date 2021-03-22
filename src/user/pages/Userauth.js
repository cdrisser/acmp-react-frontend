import React from 'react';

import Userlogin from "../components/Userlogin"
import './Userauth.css';

const Userauth = props =>{
    return(
        <div className='center authenticate-wrapper'>
            <Userlogin style='dashboard-login'/>
        </div>
    )
}

export default Userauth;