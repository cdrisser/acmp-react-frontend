import React,{useState} from 'react'

import Button from '../../shared/FormElements/Button'

const User = props =>{

console.log(props.verify);
const clickHandler=()=>{
    props.verifymember(props.id,!props.verify);
    
}
    return <li>
        
        <div>{`${props.firstname} ${props.lastname}`}</div>
        <div>{props.email}</div>
        <Button onClick={()=>{props.delete(props.id)}}>Delete </Button>
        {props.verify===true? 
        <Button onClick={clickHandler}>Remove Verification</Button>:
        <Button onClick={clickHandler}>Verify</Button>}
        <div></div>
    </li>
}
export default User;