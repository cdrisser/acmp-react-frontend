import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../../shared/context/auth-context'
import './NavLink.css';

const NavLinks = (props)=>{
    const auth = useContext(AuthContext);
return <ul className = "nav-links">
            <li>
                <NavLink to ="/">Dash</NavLink>
            </li>
            {auth.isLoggedIn && !auth.admin &&(
            <li>
                <NavLink to ="/profiles">Profiles </NavLink>
            </li>)}
            {auth.isLoggedIn && !auth.admin &&(
            <li>
                <NavLink to ="/repo">Repository</NavLink>
            </li>)}
            {auth.isLoggedIn && !auth.admin &&(
            <li>
                <NavLink to ="/events">Events</NavLink>
            </li>)}
            {auth.admin && <li>
            <NavLink to ="/admin">Admin</NavLink>
            </li>}
            {auth.isLoggedIn &&
            <li>
                <button onClick={auth.logout}>Logout</button>
             </li>
            }
</ul>
};

export default NavLinks;