import React,{useContext} from 'react'

import Button from "../../shared/FormElements/Button"
import {AuthContext} from '../../shared/context/auth-context'


const IndEvent = props=>{
    const auth = useContext(AuthContext);
    
    let regButton = true;
    
     props.participants.forEach(user=>{
        if(user.toString()===auth.userId){
            
            regButton = false;
        }
        })
    console.log(regButton)
    return(
        <React.Fragment>
        <div>
            <h2>{props.name}</h2>
            <div>Type:{props.type}</div>
            <div>Address:{`${props.address.street} ${props.address.city_state_zip}`}</div>
            
            <div>Description:{props.description}</div>
            <div>Cost:{props.cost}</div>
            {regButton ? <Button onClick={()=>{props.register(props.id)}}>Register</Button>:
            <p><em>You're registered!</em></p>}
        </div>
        </React.Fragment>
    )
}

export default IndEvent;