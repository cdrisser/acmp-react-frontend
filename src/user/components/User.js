import React from 'react'

import Button from '../../shared/FormElements/Button'
const User = props =>{
    console.log(props)
    return <li>
        
        <div>{`${props.firstname} ${props.lastname}`}</div>
        <div>{props.email}</div>
        <Button onClick={()=>{props.delete(props.id)}}>Delete </Button>
        {props.verify===true? 
        <Button onClick={()=>props.verifymember(props.id,false)}>Remove Verify</Button>:
        <Button onClick={()=>props.verifymember(props.id,true)}>Verify</Button>}
        <div></div>
    </li>
}
export default User;