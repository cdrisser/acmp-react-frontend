import React from 'react'

import Button from '../../shared/FormElements/Button'

import './User.css';
const User = props =>{

const clickHandler=()=>{
    props.verifymember(props.id,!props.verify); 
}
const userHasPaidHandler =(eventID,paid)=>{
    props.markaspaid(props.id,eventID,!paid);
}

    return <li className='user-item'>
        
        <h3>{`${props.firstname} ${props.lastname}`}</h3>
        <div>{props.email}</div>
        <div className='user-events'>
                <h3>User's Registered Events</h3>
                {props.events.map((event)=><div className='user-event-details' key={event.id}><p>{event.eventname}</p>{event.paid ? <button onClick={()=>userHasPaidHandler(event.id,event.paid)}>Remove user as paid</button>:<button onClick={()=>userHasPaidHandler(event.id,event.paid)}>Mark user as paid</button>}</div>)}

        </div>
        <hr className= 'horizline'></hr>
        <div className='center'>
            <Button onClick={()=>{props.delete(props.id)}} danger>Delete </Button>
            {props.verify===true? 
            <Button styleBut={{margin:'1rem 0'}} onClick={clickHandler} >Remove Verification</Button>:
            <Button styleBut={{margin:'1rem 0'}} onClick={clickHandler} >Verify</Button>}
        </div>
    </li>
}
export default User;