import React,{useContext} from 'react'

import Button from "../../shared/FormElements/Button"
import {AuthContext} from '../../shared/context/auth-context'

import './Events.css'

const IndEvent = props=>{
    const auth = useContext(AuthContext);
    
    let regButton = true;
    
     props.participants.forEach(user=>{
        if(user.toString()===auth.userId){
            
            regButton = false;
        }
        })
    return(
        <div className='ind-event'>
            <h2 className='event-h2'>{props.name}</h2>
            <hr className='horizline-indevent'></hr>
            
            <div className='event-details'>
            <div>{props.description}</div>
                <div className='event-address'>{`${props.address.street} ${props.address.city_state_zip}`}</div>
                <div className = 'icon-container'>
                    <div className=' icons-event'>
                    <ion-icon name="calendar-sharp"></ion-icon>                        {props.date}
                    </div>
                    <div className=' icons-event'> 
                    <ion-icon name="card-sharp"></ion-icon>                       ${props.cost}                      
                    </div>
                </div>
                <div className='button-center'>
                    {!auth.admin && <div>
                    {!props.delete && regButton ? <Button onClick={()=>{props.register(props.id)}}>Register</Button>:
                    <p className='registered-p'>You're registered!</p>}</div>}
                    {props.delete && <Button onClick={()=>{props.delete(props.id)}} danger>Delete</Button>}
            </div>
                
            </div>
            
        </div>
        
    )
}

export default IndEvent;