import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import SideDrawer from '../shared/Navigation/SideDrawer'
import Backdrop from '../shared/UIElements/Backdrop';


import './resources/css/style.css'
import './resources/css/queries.css'

const MainNav = (props)=>{
    
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

                        <div className='hamburger-nav-background'>
                <nav className="main-navigation_sidedrawer_nav">
                    <ul className="nav-links">
                        <li><NavLink to ="/">Home</NavLink></li>
                        <li><NavLink to ="/meettheteam">Meet the Team</NavLink></li>
                        <li><NavLink to ="/getinvolved">Get Involved</NavLink></li>
                        <li><NavLink to ="/contact">Contact</NavLink></li>
                        <li><NavLink to ="/members">Members</NavLink></li>
                    </ul>
                </nav>
                    </div>
                       
                </SideDrawer>
                    
                
            
            <div className = {`main-header-nav ${props.addStyle}`}>
            <div className= {`main-navigation_hamburger ${props.addStyle}`} onClick={openDrawerHandler}>
                <span></span>
                <span></span>
                <span></span>
               </div>
            <div className="main-navigation_link"><NavLink to ="/"><img src= {require("./resources/img/ACMP AZ Horizontal Transparent.png")} alt="acmp-logo"></img>
            </NavLink>
            </div>
                <nav className="main-navigation__header">
                    <ul className="nav-links">
                        <li><NavLink to ="/">Home</NavLink></li>
                        <li><NavLink to ="/meettheteam">Meet the Team</NavLink></li>
                        <li><NavLink to ="/getinvolved">Get Involved</NavLink></li>
                        <li><NavLink to ="/contact">Contact</NavLink></li>
                        <li><NavLink to ="/members">Members</NavLink></li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )}

    export default MainNav;