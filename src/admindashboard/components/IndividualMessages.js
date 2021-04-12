import React from 'react';

import './IndividualMessages.css';

const IndividualMessages = (props)=>{
    return(
        <li className = 'ind-message'>
            <div>{props.name}</div>
            <div>{props.email}</div>
            <div>{props.message}</div>
        </li>
    )
}
export default IndividualMessages;