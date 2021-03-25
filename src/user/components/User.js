import React,{useState} from 'react'

import Button from '../../shared/FormElements/Button'

import './User.css';
const User = props =>{

console.log(props.verify);
const clickHandler=()=>{
    props.verifymember(props.id,!props.verify);
    
}
    return <li className='user-item'>
        
        <div>{`${props.firstname} ${props.lastname}`}</div>
        <div>{props.email}</div>
        <Button onClick={()=>{props.delete(props.id)}} danger>Delete </Button>
        {props.verify===true? 
        <Button styleBut={{margin:'1rem 0'}} onClick={clickHandler} inverse>Remove Verification</Button>:
        <Button styleBut={{margin:'1rem 0'}} onClick={clickHandler} >Verify</Button>}
        <div></div>
    </li>
}
export default User;