import React from 'react';
import  ReactDom from 'react-dom';
import {CSSTransition} from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props)=>{
    const sideaside = ( 
        <CSSTransition 
        in={props.show} 
        timeout={200} 
        classNames="side-in-left"
        mountOnEnter
        unmountOnExit
        >
            <aside className = "side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );
        
    
    
    return ReactDom.createPortal(sideaside, document.getElementById('drawer-hook'));
};

export default SideDrawer;