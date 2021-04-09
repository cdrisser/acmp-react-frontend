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
                <div className='button-center'>
                <Button onClick ={()=>props.delete(props.id)} id={props.id}>Delete</Button>
                </div>
            </React.Fragment>
        )
    }
    

    return(<div className="repo-container-ind">
            <div className = "info-container">
                <div className='repo-title'><b>{props.repotitle}</b></div>
                <div>{props.repodescription}</div>
                <div><a href= {`${process.env.REACT_APP_BACKEND_URL}/${props.file}`} >Download</a></div>
                
            </div>
        </div>
        )
};

export default RepoItem;