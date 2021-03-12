import React from 'react'

import Button from '../../shared/FormElements/Button'
const User = props =>{
   
    return <li>

        <div>{`${props.firstname} ${props.lastname}`}</div>
        <div>{props.email}</div>
        <Button onClick={()=>{props.delete(props.id)}}>Delete </Button>
        {props.verify===false && <Button onClick={()=>props.verifymember(props.id)}>Verify</Button>}
        <div></div>
    </li>
}
export default User;