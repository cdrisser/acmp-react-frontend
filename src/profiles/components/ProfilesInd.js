import React,{useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {AuthContext} from '../../shared/context/auth-context'
import Button from '../../shared/FormElements/Button';

import "./ProfilesInd.css";

const ProfileInd = (props)=>{
    const auth = useContext(AuthContext);
    const location = useLocation().pathname === '/admin/updaterepo';

    return(
        <div className = "ind-profile">
            <div className ="leftsideprofile">
                <img className="profile-pic" src={`http://localhost:5000/${props.image}`} alt ={props.profilename} />
                <div>{`${props.firstname} ${props.lastname}`}</div>
                
                <Button href ={props.linkedin} size='small' >Linkedin</Button>
            </div>
            <div className ="rightsideprofile">
                <div>{props.elevator}</div>
               {auth.admin && location && <Button onClick={()=>{props.delete(props.id)}}>Delete</Button>}
            </div>
        </div>
    );
}
export default ProfileInd;