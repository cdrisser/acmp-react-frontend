import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../../shared/context/auth-context'
import './NavLink.css';

const NavLinks = (props)=>{
    const auth = useContext(AuthContext);
return <ul className = "nav-links">
            <li>
                <NavLink to ="/">MEMBER DASH</NavLink>
            </li>
            {auth.isLoggedIn && !auth.admin &&(
            <li>
                <NavLink to ="/profiles">PROFILES </NavLink>
            </li>)}
            {auth.isLoggedIn && !auth.admin &&(
            <li>
                <NavLink to ="/repo">REPOSITORY</NavLink>
            </li>)}
            {auth.isLoggedIn && !auth.admin &&(
            <li>
                <NavLink to ="/events">EVENTS</NavLink>
            </li>)}
            {auth.admin && <li>
            <NavLink to ="/admin">ADMIN</NavLink>
            </li>}
            {auth.isLoggedIn &&
            <li>
                <button onClick={auth.logout}>LOGOUT</button>
             </li>
            }
</ul>
};

export default NavLinks;