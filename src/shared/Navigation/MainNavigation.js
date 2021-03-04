import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import MainHeader from './MainHeader';
import NavLink from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = (props)=>{
    const [sideDrawerState, setSideDrawerState] = useState(false);

    const openDrawerHandler  = ()=>{
        setSideDrawerState(true);
    }
    const closeDrawerHandler = ()=>{
        setSideDrawerState(false);
    }
    
    return(
        <React.Fragment>
            {sideDrawerState && <Backdrop onClick={closeDrawerHandler}/>}
            <SideDrawer show={sideDrawerState} onClick={closeDrawerHandler}>
                        <nav className="main-navigation_sidedrawer_nav">
                            <NavLink />
                        </nav>
                </SideDrawer>
            <MainHeader>
                <button className = "main-navigation_hamburger" onClick={openDrawerHandler}>
                <span />
                <span />
                <span />
                </button>
                <h1 className = "main-navigation_h1">
                    <Link to="/memberdashboard">MemberDash</Link>
                </h1>
                <nav className = "main-navigation__header">
                    <NavLink  />
                </nav>
            </MainHeader>
        </React.Fragment>
    )

}
export default MainNavigation;