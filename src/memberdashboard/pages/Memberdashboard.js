import React,{useContext} from 'react';

import NewsList from '../components/LatestNewsList';
import UserLogin from '../../user/components/Userlogin'
import './Memberdashboard.css'
import {AuthContext} from '../../shared/context/auth-context';


const Dash = ()=>{
const auth = useContext(AuthContext);
console.log(auth.username)
    const NEWS = [{ id:'1', header: "yada yada yada", body:"yada yada yada"},
                  { id:'2', header: "yo yo yo ", body:"yo yo yo"}]

return (
    <React.Fragment>
        {!auth.isLoggedIn ? 
        <div className="dashboard-container">
            <NewsList items = {NEWS} /><UserLogin/></div>:
            
          <div className="flex-column">
                    <h1 >HELLO!</h1>
                    <span>Welcome back, {auth.username}!</span>
                    <NewsList items = {NEWS} />
                </div>
        }
        
    </React.Fragment>
);
};

export default Dash;