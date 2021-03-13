import React from 'react'
import Button from "../../shared/FormElements/Button"

const IndEvent = props=>{

  
    return(
        <React.Fragment>
        <div>
            <h2>{props.name}</h2>
            <div>Type:{props.type}</div>
            <div>Address:{`${props.address.street} ${props.address.city_state_zip}`}</div>
            
            <div>Description:{props.description}</div>
            <div>Cost:{props.cost}</div>
            <Button onClick={()=>{props.register(props.id)}}>Register</Button>
        </div>
        </React.Fragment>
    )
}

export default IndEvent;