import React,{useContext} from 'react';

import Button from '../../shared/FormElements/Button'

import {AuthContext} from '../../shared/context/auth-context';
import './RepoItem.css';

const RepoItem = (props)=>{
    const auth = useContext(AuthContext);
    

    if(auth.admin){
        return(
            <React.Fragment>
                <div>Title: {props.repotitle}</div>
                <div>ID: {props.id}</div>
                <Button onClick ={()=>props.delete(props.id)} id={props.id}>Delete</Button>
            </React.Fragment>
        )
    }
    

    return(<div className="repo-container-ind">
            <div className = "info-container">
                <div>{props.repotitle}</div>
                <div>{props.repodescription}</div>
                <div><a href= {`http://localhost:5000/${props.file}`} ><img style={{width:"100px",height:"100px"}} src = {`http://localhost:5000/${props.file}`}/></a></div>
    
            </div>
        </div>
        )
};

export default RepoItem;